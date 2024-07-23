const { execSync } = require("child_process");
const { app, BrowserWindow } = require("electron");
const path = require("node:path");

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadFile("index.html");
});

function blockMainThread() {
  console.log("Sleep start", Date.now());
  execSync(`sleep 2`);
  console.log("Sleep end", Date.now());
}

setInterval(blockMainThread, 4_000);
