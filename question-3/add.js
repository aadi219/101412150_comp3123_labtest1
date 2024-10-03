const fs = require("fs");
const path = require("path");

const LOG_PATH = path.join(__dirname, "Logs");

try {
  fs.mkdirSync(LOG_PATH);
  addFiles();
} catch (err) {
  console.error("Error while creating logs!");
  console.log(err);
}

function addFiles() {
  for (let i = 0; i < 10; i++) {
    const fileName = `logs${i}.txt`;
    const filePath = path.join(LOG_PATH, fileName);
    const data = `Some data in ${fileName}`;
    fs.writeFileSync(filePath, data);
    console.log(`${fileName} created`);
  }
}
