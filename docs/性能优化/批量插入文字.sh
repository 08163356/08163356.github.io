#!/bin/bash

# 使用 find 命令查找当前目录及其子目录下的所有 .md 文件
find . -type f -name "*.md" | while read -r file; do
    # 使用 wc 命令获取文件的行数
    line_count=$(wc -l < "$file")
    
    if [ "$line_count" -lt 30 ]; then
        # 如果行数小于30，则在文件的最后一行插入 <!-- more -->
        echo "<!-- more -->" >> "$file"
    else
        # 否则，在第三十行之前插入 <!-- more -->
        sed -i '30i\<!-- more -->' "$file"
    fi
done