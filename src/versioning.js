const fs = require('fs');
const childProcess = require('child_process');

var commitInfoFetchCmd = "git show HEAD --pretty=fuller --quiet"
var upVersionCmd = "npm version patch";

var srcFolder = ".\\versioning.txt"
var destinationFolder = ".\\public\\versioning.txt"


commitInfo = childProcess
    .execSync(commitInfoFetchCmd)
    .toString().trim();

childProcess.execSync(upVersionCmd);

const versionInfo = {
    version: "1.0.1",
    commitInfo,
}

fs.readFile("./package.json", { encoding: 'utf8' }, (err, data) => {
    err && console.log(err);
    const jsonObj = JSON.parse(data);
    versionInfo.version = jsonObj.version;
    fs.writeFile(srcFolder, JSON.stringify(versionInfo), (err) => {
        err && console.log(err);
        fs.copyFile(srcFolder, destinationFolder, (err) => {
            err && console.log(err);
            console.log(versionInfo);
        })
    });
})



