var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

//Global reference of window object
var mainWindow = null;

app.on('window-all-closed', function(){
  if (process.platform != 'darwin'){
    app.quit();
  }
});

app.on('ready', function(){
  // Create browser window
  mainWindow = new BrowserWindow({width:300,height:380});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});
