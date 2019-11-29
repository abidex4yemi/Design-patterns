class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timeStamp = new Date().toISOString();
    this.logs.push({ message, timeStamp });
    console.log(`${timeStamp}-${message}`);
  }
}

// First pass solution
// class SingleTon {
//   constructor() {
//     if (!SingleTon.instance) {
//       SingleTon.instance = new Logger();
//     }
//   }

//   getInstance() {
//     return SingleTon.instance;
//   }
// }

// Second pass solution
// Note Node.js will automatically cache the Logger instance
// meaning only once instance will be created at run time
module.exports = new Logger();
