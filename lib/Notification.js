module.exports = test;

const {Notification, nativeImage} = require('electron'),
    https = require('https'),  
    URL = require('url'),
    path = require('path'), 
    fs = require('fs');


function test() {
    var img1 = nativeImage.createFromPath(path.join(__dirname, '../thumb-1.jpg'));
    var img2 = nativeImage.createFromPath(path.join(__dirname, '../thumb.jpg'));

    console.log(img1.isEmpty(), img2.isEmpty(), img1.toDataURL() == img2.toDataURL());

    new Notification({
        title: 'test', 
        body: 'test body', 
        icon: img1
    }).show();

    setTimeout(function(){
        new Notification({
            title: 'test', 
            body: 'test body', 
            icon: img2
        }).show();
    }, 5000);
}