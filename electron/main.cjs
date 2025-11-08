const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

const isDev = !app.isPackaged;
let mainWindow;

function createWindow() {
  console.log("Creating Electron window...");
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#ffffff",
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173/");
    mainWindow.webContents.openDevTools();
  } 

  else {
    // mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
    const indexPath = path.join(app.getAppPath(), "dist", "index.html");
    console.log("Loading production index.html from:", indexPath);
    mainWindow.loadFile(indexPath).catch(err => {
      console.error("Failed to load index.html:", err);
    });
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

