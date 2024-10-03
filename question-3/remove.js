const fs = require("fs");
const path = require("path");

const LOG_PATH = path.join(__dirname, "Logs");

try {
  let files = fs.readdirSync(LOG_PATH);
  for (let file of files) {
    fs.unlinkSync(path.join(LOG_PATH, file));
    console.log(`Delete files...${file}`);
  }
  fs.rmdirSync(LOG_PATH);
  console.log("Logs directory deleted!");
} catch (err) {
  console.error("Error occurred while deleting files!");
  console.log(err);
}
