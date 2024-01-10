const fs = require('fs');
const path = require('path');

const root = process.cwd();

if(fs.readdirSync(path.resolve(`${root}/dist`))) {
    // 如果存在dist目录
    fs.copyFileSync(path.resolve(`${root}/electron.js`), path.resolve(`${root}/dist/main.js`))
}