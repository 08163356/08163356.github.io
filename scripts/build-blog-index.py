"""扫描 docs/*.md，写出 daily 助手可检索的 blog-index.json。

尊重 docs/.vuepress/config.ts 的 pagePatterns 排除项。
跳过 article: false 的目录页。不含密码、不含 blog-private。
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
CONFIG = DOCS / ".vuepress" / "config.ts"
SITE_HOST = "https://ablog.axingit.top"
EXCERPT_LEN = 400

PAGE_PATTERN_RE = re.compile(r'pagePatterns:\s*\[(.*?)\]', re.S)
STRING_RE = re.compile(r'"([^"]+)"')
FM_RE = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n?", re.S)


def parse_excludes(config_text: str) -> list[str]:
    match = PAGE_PATTERN_RE.search(config_text)
    if not match:
        return []
    excludes: list[str] = []
    for raw in STRING_RE.findall(match.group(1)):
        if raw.startswith("!"):
            excludes.append(raw[1:].replace("\\", "/"))
    return excludes


def is_excluded(rel: str, excludes: list[str]) -> bool:
    rel = rel.replace("\\", "/")
    for pat in excludes:
        if pat.endswith("/**"):
            prefix = pat[:-3]
            if rel == prefix or rel.startswith(prefix + "/"):
                return True
        elif pat.endswith("/*"):
            prefix = pat[:-2]
            if rel.startswith(prefix + "/") and "/" not in rel[len(prefix) + 1 :]:
                return True
        elif rel == pat:
            return True
    return False


def _unquote(value: str) -> str:
    value = value.strip()
    if len(value) >= 2 and value[0] in {'"', "'"} and value[-1] == value[0]:
        return value[1:-1]
    return value


def parse_frontmatter(text: str) -> tuple[dict, str]:
    text = text.lstrip("\ufeff")
    match = FM_RE.match(text)
    if not match:
        return {}, text
    raw = match.group(1)
    body = text[match.end() :]
    data: dict = {}
    key: str | None = None
    for line in raw.splitlines():
        if not line.strip() or line.strip().startswith("#"):
            continue
        if re.match(r"^\s+-\s+", line) and key:
            item = _unquote(re.sub(r"^\s+-\s+", "", line))
            current = data.get(key)
            if not isinstance(current, list):
                data[key] = []
            if item and item != "-":
                data[key].append(item)
            continue
        kv = re.match(r"^([A-Za-z0-9_]+):\s*(.*)$", line)
        if not kv:
            key = None
            continue
        key, value = kv.group(1), kv.group(2).strip()
        if value == "" or value == "|":
            data[key] = []
            continue
        if value in {"[]", "null"}:
            data[key] = []
            continue
        if value.lower() == "false":
            data[key] = False
            continue
        if value.lower() == "true":
            data[key] = True
            continue
        data[key] = _unquote(value)
    return data, body


def excerpt_of(body: str) -> str:
    text = body
    text = re.sub(r"<!--\s*more\s*-->", " ", text, flags=re.I)
    text = re.sub(r"```[\s\S]*?```", " ", text)
    text = re.sub(r"`[^`]*`", " ", text)
    text = re.sub(r"!\[.*?\]\(.*?\)", " ", text)
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"^#{1,6}\s*", "", text, flags=re.M)
    text = re.sub(r"[*_~]{1,3}", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text[:EXCERPT_LEN]


def as_list(value) -> list[str]:
    if isinstance(value, list):
        return [str(v) for v in value if str(v).strip()]
    if isinstance(value, str) and value.strip():
        return [value.strip()]
    return []


def collect_pages() -> list[dict]:
    if not CONFIG.is_file():
        raise SystemExit(f"找不到 {CONFIG}")
    excludes = parse_excludes(CONFIG.read_text(encoding="utf-8"))
    pages: list[dict] = []
    for path in DOCS.rglob("*.md"):
        rel = path.relative_to(DOCS).as_posix()
        if rel.startswith(".vuepress/") or "node_modules/" in rel:
            continue
        if is_excluded(rel, excludes):
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except OSError:
            continue
        meta, body = parse_frontmatter(text)
        if meta.get("article") is False:
            continue
        permalink = str(meta.get("permalink") or "").strip()
        if not permalink:
            continue
        if not permalink.startswith("/"):
            permalink = "/" + permalink
        if not permalink.endswith("/"):
            permalink += "/"
        title = str(meta.get("title") or path.stem).strip()
        pages.append(
            {
                "title": title,
                "permalink": permalink,
                "url": f"{SITE_HOST}{permalink}",
                "categories": as_list(meta.get("categories")),
                "tags": as_list(meta.get("tags")),
                "excerpt": excerpt_of(body),
            }
        )
    pages.sort(key=lambda p: p["permalink"])
    return pages


def write_index(dest: Path) -> Path:
    pages = collect_pages()
    dest.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "host": SITE_HOST,
        "count": len(pages),
        "pages": pages,
    }
    dest.write_text(json.dumps(payload, ensure_ascii=False, indent=0), encoding="utf-8")
    return dest


def main() -> None:
    dest = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "site-out" / "blog-index.json"
    path = write_index(dest)
    data = json.loads(path.read_text(encoding="utf-8"))
    print(f"blog-index.json {data['count']} 篇 → {path}")


if __name__ == "__main__":
    main()
