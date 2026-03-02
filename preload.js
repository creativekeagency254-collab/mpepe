const { contextBridge } = require("electron");
const fs = require("fs");
const path = require("path");

function readMpeFile() {
  try {
    return fs.readFileSync(path.join(__dirname, "mpe"), "utf8");
  } catch {
    return "";
  }
}

contextBridge.exposeInMainWorld("mpeApp", {
  getMpeContent: readMpeFile
});
