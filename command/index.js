const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Create <fileName> <text> | exit");

rl.prompt();

rl.on("line", input => {
  const [commandText, ...remaining] = input.split(" ");
  const [fileName, ...fileText] = remaining;

  const text = fileText.join(" ");

  switch (commandText) {
    case "exit":
      console.log("Todo: exit");
      break;
    case "create":
      console.log(`Todo: create file ${fileName}`);
      console.log("File contents:", text);
      break;
    default:
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();
});
