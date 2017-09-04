var electronInstaller = require('electron-winstaller');
const path = require('path');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: __dirname,
    outputDirectory: __dirname+'/build',
    authors: 'lihe_li',
    description:'cloudhub',
    exe: 'cloudhub.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));