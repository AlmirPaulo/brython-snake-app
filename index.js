const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', ()=> {
   
    mainWindow = new BrowserWindow({
    ///// Optional Parameters /////
    //    width: 800,
    //    height: 600,
    //    resizable: true
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)

});




