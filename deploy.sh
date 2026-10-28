#!/usr/bin/env sh
# 主发布路径是 ablog.axingit.top，不是 GitHub Pages。
set -e
cd "$(dirname "$0")"
python scripts/deploy-ablog.py "$@"
