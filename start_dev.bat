@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

echo ==========================================
echo      FFXIV Best Craft - 開發模式啟動
echo ==========================================

:: 1. Check NPM
if exist "node_modules\" goto :check_wasm
echo [系統] 偵測到尚未安裝依賴元件...
echo [系統] 正在自動執行 npm install...
call npm install
if %errorlevel% neq 0 goto :error_npm
echo [系統] 依賴元件安裝完成！

:check_wasm
:: 2. Check Wasm
if exist "pkg-wasm\" goto :start_server
echo [系統] 偵測到 Wasm 模組尚未編譯...
echo [系統] 正在執行 Wasm 編譯 (需要 Rust)...
call npm run predev-web
if %errorlevel% neq 0 goto :error_wasm
echo [系統] Wasm 編譯完成！

:start_server
echo [系統] 正在啟動網頁伺服器...
set VITE_BESTCRAFT_TARGET=web
call npx vite --host
if %errorlevel% neq 0 goto :error_server
goto :eof

:error_npm
echo.
echo [錯誤] npm install 失敗！請檢查 Node.js 安裝狀態。
pause
exit /b

:error_wasm
echo.
echo ========================================================
echo [錯誤] Wasm 編譯失敗！
echo ========================================================
echo.
echo ************ 必讀：您可能缺少必要的工具 ************
echo.
echo 此項目需要 "Rust" 與 "wasm-pack" 才能運作。
echo 您雖然可能剛剛安裝了 Rust，但還需要手動安裝 wasm-pack。
echo.
echo 請依照以下步驟修復 (只需做一次)：
echo.
echo 1. 關閉此視窗。
echo 2. 打開一個新的黑色視窗 (搜尋 CMD)。
echo 3. 輸入指令： cargo install wasm-pack
echo 4. 等待跑完 (可能會跑幾分鐘)。
echo 5. 完成後，再重新執行此腳本。
echo.
echo ========================================================
pause
exit /b

:error_server
echo.
echo [錯誤] 伺服器異常終止。
pause
exit /b
