"""把博客构建并发布到 ablog.axingit.top（8.135.9.12:/var/www/blog）。

用法：
  npm run deploy
  python scripts/deploy-ablog.py
  python scripts/deploy-ablog.py --skip-build
  python scripts/deploy-ablog.py --build-only

密码：环境变量 BLOG_SERVER_PWD 或 DEPLOY_SSH_PASSWORD；
没有的话再读本机 interview/deploy.py 里的 PASSWORD；再没有就交互输入。
不打印密码。不写进仓库。

rsync 只动 /var/www/blog，排除 .well-known。不要冲掉 /daily 等 alias。
"""
from __future__ import annotations

import argparse
import getpass
import os
import re
import subprocess
import sys
import time
import zipfile
from pathlib import Path

try:
    import paramiko
except ImportError:
    print("需要 paramiko: pip install paramiko")
    sys.exit(1)

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = Path(__file__).resolve().parent.parent
SITE_OUT = ROOT / "site-out"
ZIP_PATH = ROOT / "blog-dist.zip"
LOCAL_SECRET_FILES = (
    Path(r"G:\axingSpace\interview\deploy.py"),
    Path(r"G:\game\terraia\deploy_web.py"),
    Path(r"G:\game\terraia\deploy_v9.py"),
    Path(r"G:\axingSpace\daily\_tmp_deploy5.py"),
)
SECRET_PATS = (
    re.compile(r"^(?:PASSWORD|SSH_PASS)\s*=\s*['\"]([^'\"]+)['\"]", re.M),
    re.compile(r"password\s*=\s*['\"]([^'\"]+)['\"]"),
)

SERVER = "8.135.9.12"
PORT = 22
USER = "root"
REMOTE_BLOG = "/var/www/blog"
VERIFY_PATHS = (
    "/pages/oo-index/",
    "/pages/perf-index/",
    "/blog-index.json",
    "/daily/",
)


def resolve_password() -> str:
    for key in ("BLOG_SERVER_PWD", "DEPLOY_SSH_PASSWORD"):
        val = os.environ.get(key, "").strip()
        if val:
            return val
    for path in LOCAL_SECRET_FILES:
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for pat in SECRET_PATS:
            match = pat.search(text)
            if match and match.group(1) not in {"", "xxx"} and "environ" not in match.group(1):
                return match.group(1)
    return ""


def build() -> None:
    print("构建 site-out（独立 temp/cache，避开默认 dist 锁）")
    if not (ROOT / "node_modules").exists():
        subprocess.run(["npm", "install"], cwd=str(ROOT), check=True, shell=True)
    cmd = [
        "npx",
        "vuepress",
        "build",
        "docs",
        "-d",
        "site-out",
        "-t",
        ".vp-temp",
        "--cache",
        ".vp-cache",
    ]
    result = subprocess.run(cmd, cwd=str(ROOT), shell=True)
    if result.returncode != 0:
        print("构建失败")
        sys.exit(1)
    if not (SITE_OUT / "index.html").is_file():
        print(f"构建产物缺少 index.html: {SITE_OUT}")
        sys.exit(1)
    files = sum(1 for p in SITE_OUT.rglob("*") if p.is_file())
    print(f"构建完成，{files} 个文件")


def write_blog_index() -> None:
    dest = SITE_OUT / "blog-index.json"
    result = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "build-blog-index.py"), str(dest)],
        cwd=str(ROOT),
    )
    if result.returncode != 0 or not dest.is_file():
        print("blog-index.json 未生成")
        sys.exit(1)


def pack() -> None:
    print("打包 site-out（排除 .git）")
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for path in SITE_OUT.rglob("*"):
            if not path.is_file():
                continue
            rel = path.relative_to(SITE_OUT)
            if ".git" in rel.parts:
                continue
            zf.write(path, rel.as_posix())
    size_mb = ZIP_PATH.stat().st_size / 1024 / 1024
    print(f"打包完成: {ZIP_PATH.name} ({size_mb:.1f} MB)")


def _new_client() -> paramiko.SSHClient:
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    return ssh


def create_ssh() -> paramiko.SSHClient:
    try:
        ssh = _new_client()
        ssh.connect(
            SERVER,
            PORT,
            USER,
            timeout=30,
            allow_agent=True,
            look_for_keys=True,
        )
        print(f"SSH 已连接（密钥） {USER}@{SERVER}")
        return ssh
    except Exception:
        pass
    password = resolve_password()
    if not password:
        password = getpass.getpass(f"请输入 {USER}@{SERVER} 的密码: ")
    ssh = _new_client()
    ssh.connect(SERVER, PORT, USER, password=password, timeout=30)
    print(f"SSH 已连接 {USER}@{SERVER}")
    return ssh


def exec_cmd(ssh: paramiko.SSHClient, cmd: str, check: bool = True, timeout: int = 300) -> tuple[int, str]:
    print(f"  $ {cmd}")
    _, stdout, stderr = ssh.exec_command(cmd, timeout=timeout)
    out = stdout.read().decode("utf-8", errors="replace").strip()
    err = stderr.read().decode("utf-8", errors="replace").strip()
    code = stdout.channel.recv_exit_status()
    if out:
        print(f"    {out[:400]}")
    if err and code != 0:
        print(f"    {err[:300]}")
    if check and code != 0:
        print(f"远程命令失败 exit={code}")
        sys.exit(1)
    return code, out


def upload(ssh: paramiko.SSHClient) -> None:
    stamp = int(time.time())
    remote_zip = f"/tmp/blog-dist-{stamp}.zip"
    remote_tmp = f"/tmp/blog-release-{stamp}"
    print(f"上传 {ZIP_PATH.name} → {remote_zip}")
    sftp = ssh.open_sftp()
    sftp.put(str(ZIP_PATH), remote_zip)
    sftp.close()

    exec_cmd(ssh, f"rm -rf {remote_tmp} && mkdir -p {remote_tmp} && unzip -q -o {remote_zip} -d {remote_tmp}")
    code, _ = exec_cmd(ssh, f"test -f {remote_tmp}/index.html && echo OK", check=False)
    if code != 0:
        print("zip 解压后根目录没有 index.html，中止，未改 /var/www/blog")
        exec_cmd(ssh, f"rm -rf {remote_tmp} {remote_zip}", check=False)
        sys.exit(1)

    print("rsync 到 /var/www/blog（--delete，排除 .well-known）")
    exec_cmd(
        ssh,
        f"rsync -a --delete --exclude '.well-known' {remote_tmp}/ {REMOTE_BLOG}/",
    )
    exec_cmd(ssh, f"chown -R www-data:www-data {REMOTE_BLOG}")
    exec_cmd(ssh, f"rm -rf {remote_tmp} {remote_zip}", check=False)

    exec_cmd(ssh, f"test -f {REMOTE_BLOG}/index.html && echo blog-index-ok")
    exec_cmd(ssh, f"test -d {REMOTE_BLOG}/.well-known && echo well-known-ok || echo well-known-missing")

    print("核对本地 nginx 路径")
    for path in VERIFY_PATHS:
        cmd = (
            "curl -sI -o /dev/null -w '%{http_code}' "
            f"-H 'Host: ablog.axingit.top' http://127.0.0.1{path}"
        )
        _, status = exec_cmd(ssh, cmd, check=False)
        print(f"  {path} → {status or '?'}")
        if path == "/daily/" and status not in {"200", "301", "302", "303", "307", "308"}:
            print("daily 探测异常：nginx alias 可能被冲掉，立刻检查 /etc/nginx/sites-available/blog")
        if path.startswith("/pages/") and status not in {"200", "301", "302"}:
            print(f"{path} 探测异常，检查构建产物")
        if path == "/blog-index.json" and status not in {"200", "301", "302"}:
            print("blog-index.json 探测异常，检查是否随 rsync 上线")


def main() -> None:
    parser = argparse.ArgumentParser(description="发布博客到 ablog.axingit.top")
    parser.add_argument("--skip-build", action="store_true", help="用已有 site-out")
    parser.add_argument("--build-only", action="store_true", help="只构建打包，不上传")
    args = parser.parse_args()

    if args.skip_build:
        if not (SITE_OUT / "index.html").is_file():
            print("没有 site-out/index.html，不能 --skip-build")
            sys.exit(1)
    else:
        build()
    write_blog_index()
    pack()
    if args.build_only:
        print("只构建，跳过上传")
        return
    ssh = create_ssh()
    try:
        upload(ssh)
    finally:
        ssh.close()
        if ZIP_PATH.exists():
            ZIP_PATH.unlink()
    print("发布完成 https://ablog.axingit.top/")


if __name__ == "__main__":
    main()
