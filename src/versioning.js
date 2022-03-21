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

fs.readFile("./package.json", { encoding: 'utf8' }, (err, data) => {
    const jsonObj = JSON.parse(data);
    data.version = jsonObj.version;
})

fs.writeFile('./public/versioning.txt', JSON.stringify(data), (err) => {
    if (err) {
        console.log(err);
    }
});



console.log(data);