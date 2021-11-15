const { app, BrowserWindow, autoUpdater } = require('electron');

// require('update-electron-app')();


const init = () => {

    const mainWindow = new BrowserWindow();

    let content = `${app.getName()}  v${app.getVersion()}`

    mainWindow.webContents.loadURL('data:text/plain;charset=utf-8,' + encodeURI(content));

    autoUpdater.checkForUpdates()

}

app.on('ready', init);

autoUpdater.on('error', err => {
    console.log('updated error');
    console.log(err);
})

autoUpdater.on('checking-for-update', () => {
    console.log('checking-for-update')
  })

  autoUpdater.on('update-available', () => {
    console.log('update-available; downloading...')
  })

  autoUpdater.on('update-not-available', () => {
    console.log('update-not-available')
  })
