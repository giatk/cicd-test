const fs = require('fs');
const childProcess = require('child_process');

var cmd3 = "git show HEAD --pretty=fuller --quiet"


revision = childProcess
    .execSync(cmd3)
    .toString().trim()

const data = {
    version: "1.0.1",
    commitInfo: revision,
}

fs.writeFile('./public/versioning.txt', JSON.stringify(data), (err) => {
    if (err) {
        console.log(err);
    }
});

console.log(data);