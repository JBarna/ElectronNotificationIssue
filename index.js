const {app} = require('electron'),
    Notification = require('./lib/Notification');

// start our app
app.on('ready', () => {
    Notification();
});