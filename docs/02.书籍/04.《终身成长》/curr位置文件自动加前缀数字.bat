@echo off
setlocal enabledelayedexpansion

set "counter=0"

for %%F in (*.md) do (
    set /a "counter+=1"
    set "newFileName=!counter!.%%~nF%%~xF"
    ren "%%F" "!newFileName!"
)

exit /b