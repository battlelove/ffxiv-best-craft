@echo off
chcp 65001 >nul
echo [系統] 1. 檢查依賴 (npm install)...
if not exist "node_modules\" call npm install

echo [系統] 2. 編譯 Wasm (npm run predev-web)...
call npm run predev-web

:: Strict Check: Did build succeed?
if not exist "pkg-wasm\app_wasm.js" (
    echo.
    echo ========================================================
    echo [嚴重錯誤] Wasm 檔案產生失敗！
    echo ========================================================
    echo 系統找不到 "pkg-wasm\app_wasm.js"。
    echo 這表示 wasm-pack 編譯沒有成功，或者路徑設定錯誤。
    echo.
    echo 請嘗試手動執行以下指令來查看詳細錯誤：
    echo npm run predev-web
    echo.
    echo ========================================================
    pause
    exit /b
)

echo [系統] 3. 啟動伺服器...
echo [系統] 網頁將自動開啟...
set VITE_BESTCRAFT_TARGET=web
call npx vite --host --open

echo [系統] 執行結束。
pause
