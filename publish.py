"""兼容入口：转发到 scripts/deploy-ablog.py。正式命令是 npm run deploy。"""
from pathlib import Path
import runpy

runpy.run_path(str(Path(__file__).resolve().parent / "scripts" / "deploy-ablog.py"), run_name="__main__")
