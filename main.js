const {app, BrowserWindow} = require("electron");

const Window = () => {
    const win = new BrowserWindow({
        show: false
    })
    win.setIcon("icon.ico")
    win.setBackgroundColor("#202225")
    win.setMenu(null)
    win.setTitle("Home - LQDOJ: Le Quy Don Online Judge")
    win.loadFile("index.html")
    win.maximize()
    win.show()
}

app.whenReady().then(() => {
    Window()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
