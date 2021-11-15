const { app, BrowserWindow } = require('electron');

export default GH_TOKEN=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

const init = () => {

    const mainWindow = new BrowserWindow();

    let content = `${app.getName()}  v${app.getVersion()}`

    mainWindow.webContents.loadURL('data:text/plain;charset=utf-8,' + encodeURI(content));

}

app.on('ready', init);
