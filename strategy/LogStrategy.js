const path = require("path");
const { appendFile } = require("fs");
const morse = require("morse");

class LogStrategy {
  // adding new strategy
  static toMorseCode(timestamp, message) {
    const morseCode = morse.encode(message);
    // const decodedMorse = morse.decode(morseCode);
    console.log(morseCode);
    // console.log(decodedMorse);
  }

  static noDate(timestamp, message) {
    console.log(message);
  }

  static toFile(timestamp, message) {
    const fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${timestamp} - ${message} \n`, error => {
      if (error) {
        console.log("Error writing to file");
        console.log(error);
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp}-${message}`);
  }

  static none() {}
}

module.exports = LogStrategy;
