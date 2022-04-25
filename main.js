const {app, BrowserWindow} = require("electron");

const Window = () => {
    const win = new BrowserWindow({
        useContentSize: true
    })
    win.setMenu(null)
    win.loadURL("https://lqdoj.edu.vn")
    win.setIcon("icon.ico")
}

app.whenReady().then(() => {
    Window()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
