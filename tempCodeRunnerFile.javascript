

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // HANDLING CTRL + C USER INPUT
  //// Register an event listener for stdin. The listener will use a function called handleUserInput that runs when you receive input from your keyboard

  stdin.on('data', handleUserInput);

  const handleUserInput = function() {
    process.stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  }
  return stdin;
};