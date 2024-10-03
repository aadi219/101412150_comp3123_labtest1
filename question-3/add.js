const fs = require("fs");
const path = require("path");
const process = require("process");

const LOG_PATH = path.join(__dirname, "Logs");

try {
  fs.mkdirSync(LOG_PATH);
  process.chdir(LOG_PATH);
  addFiles();
} catch (err) {
  console.log(err);
}

function addFiles() {
  for (let i = 0; i < 10; i++) {
    const fileName = `logs${i}.txt`;
    const data = `Some data in ${fileName}`;
    fs.writeFileSync(fileName, data);
    console.log(`${fileName} created`);
  }
}
addFiles();
