@echo off
chcp 65001 > nul
cd /d %~dp0

echo.
echo === Repo update (git pull) ===
git pull
if %errorlevel% neq 0 (
    echo Erreur git pull
    pause
    exit /b %errorlevel%
)

echo.
echo === Dependencies updates (npm install) ===
call npm i
if %errorlevel% neq 0 (
    echo Erreur npm install
    pause
    exit /b %errorlevel%
)

echo.
echo === Project build (npm run build) ===
call npm run build
if %errorlevel% neq 0 (
    echo Erreur build
    pause
    exit /b %errorlevel%
)

echo.
echo Extension is updated !
pause