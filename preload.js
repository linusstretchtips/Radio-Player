// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const ipcRenderer = require("electron").ipcRenderer;
  const appExit = document.getElementById("appExit");
  const appMin = document.getElementById("appMin");

  appExit.addEventListener("click", (event) => {
    ipcRenderer.send("close-window");
  });
  appMin.addEventListener("click", (event) => {
    ipcRenderer.send("min-window");
  });
});

