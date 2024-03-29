const {app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

var {spawn} = require('child_process')

const pipe = spawn('mongod', ['-dbpath','/data/db', '--port', '27017'],{shell: true, env: 'production'});

pipe.stdout.on('data', function (data) {
 console.log('onnnnnnn',data.toString('utf8'));
});

pipe.on('close', (code) => {
 console.log('Process exited with code: '+ code);
});

const a = require(path.join(__dirname, '/../build/build/app.bundle.js'))
a
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600
  })


    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(startUrl);


  // Emitted when the window is closed.
  win.on('closed', () => {
    console.log('application quit')
  process.exit()
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    console.log('application quit')
  process.exit()
    app.quit()
  }
})

app.on('close', (e) => {
  console.log('application quit')
  process.exit()

  });

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})