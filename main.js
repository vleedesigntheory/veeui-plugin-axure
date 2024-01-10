const { app, BrowserWindow, ipcMain } = require("electron");

const curl = require("curl");
const path = require("path");
const fs = require("fs");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 750,
    titleBarStyle: "hidden",
    icon: path.join(__dirname, "public/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "public/preload.js"),
    },
  });

  curl.get(
    "http://127.0.0.1:32767/start.html",
    {},
    function (err, response, body) {
      if (err) {
        console.error(err);
        win.webContents.send("update-isAxure", false);
      }

      if (response) {
        console.log("response", response);
        win.webContents.send("update-isAxure", true);
      }

      if (body) {
        console.log("body", body);
        win.webContents.send("update-isAxure", true);
      }
    }
  );

  win.loadFile("dist/index.html");
  // win.loadURL("http://localhost:8080");

  // 打开开发者工具
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  ipcMain.on("isAxure-value", (_event, value) => {
    console.log(value); // will print value to Node console
  });

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
