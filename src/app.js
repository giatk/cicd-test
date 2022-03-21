var cmd1 = "git rev-parse HEAD"
var cmd2 = "git show eb3792d2881c872adccaa768165b47225e7c1285 --pretty=oneline"
revision = require('child_process')
    .execSync(cmd2)
    .toString().trim()

console.log(revision);