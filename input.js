
// THIRD STEP
//// How can your input module send messages to the server without a connection object? It can't!
//// You need to allow the connection object to have access to the data coming in from the keyboard.
//// In other words, variables that hold keyboard data need to be in the same scope as the connection object (or passed to it in some way).
//// One way to fix this is to pass the conn object returned by connect() to the setUpInput function.

// Stores the active TCP connection object.
let connection;

// FIRST STEP - SETUP INTERFACE TO HANDLE USER INPUT FROM STDIN
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;

  // HANDLING CTRL + C USER INPUT
  //// Register an event listener for stdin. The listener will use a function called handleUserInput that runs when you receive input from your keyboard

  stdin.on('data', handleUserInput);
  
  return stdin;
};

// SECOND STEP - The stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const handleUserInput = function() {
  process.stdin.on('data', (conn) => {
    if (conn === 'w') {
      connection.write('Move: up')
    };

    if (conn === 'a') {
      connection.write('Move: left')
    };

    if (conn === 's') {
      connection.write('Move: down')
    };

    if (conn === 'd') {
      connection.write('Move: right')
    };

    if (conn === '\u0003') {
      process.exit();
    };
  });
};


module.exports = {
  setupInput
};