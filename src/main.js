const { app, BrowserWindow } = require('electron');

require('update-electron-app')();


const init = () => {

    const mainWindow = new BrowserWindow();

    let content = `${app.getName()}  v${app.getVersion()}`

    mainWindow.webContents.loadURL('data:text/plain;charset=utf-8,' + encodeURI(content));

}

app.on('ready', init);
