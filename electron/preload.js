const { contextBridge } = require('electron');

// Expose APIs to renderer process if needed
contextBridge.exposeInMainWorld('electronAPI', {
  // Add APIs here if needed
});
