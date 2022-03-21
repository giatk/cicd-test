const fs = require('fs');
const childProcess = require('child_process');

var cmd3 = "git show HEAD --pretty=fuller --quiet"


revision = childProcess
    .execSync(cmd3)
    .toString().trim()

fs.writeFile('./public/versioning.txt', revision, (err) => {
    if (err) {
        console.log(err);
    }
});