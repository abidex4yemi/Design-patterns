class Conductor {
  constructor() {
    this.history = [];
    this.undone = [];
  }

  run(command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    this.history.push(command);
  }

  printHistory() {
    console.log("History of all executed commands");
    this.history.forEach(command => console.log(`${command.name} executed`));
  }

  undo() {
    if (!this.history.length) {
      console.log("No existing command to undo");
      return;
    }
    const command = this.history.pop();
    command.undo();
    this.undone.push(command);
    console.log(`Undo ${command.name}`);
  }

  redo() {
    if (!this.undone.length) {
      console.log("No existing command to redo");
      return;
    }
    const command = this.undone.pop();
    command.execute();
    this.history.push(command);
    console.log(`Redo ${command.name}`);
  }
}

module.exports = new Conductor();
