const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateIsAxure: (callback) => ipcRenderer.on('update-isAxure', (_event, value) => callback(value)),
  isAxureValue: (value) => ipcRenderer.send('isAxure-value', value)
})