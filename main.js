const {app, BrowserWindow} = require("electron");

const Window = () => {
    const win = new BrowserWindow({
        height: 600,
        weight: 900,
        autoHideMenuBar: true
    })
    win.loadURL("https://lqdoj.edu.vn")
    win.setIcon("icon.ico")
    win.setTitle("Home - LQDOJ: Le Quy Don Online Judge")
}

app.whenReady().then(() => {
    Window()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
