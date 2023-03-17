const net = require("net");

// ESTABLISH A CONNECTION WITH THE SERVER
// We returned a conn object from the connect function that allowed us to interact with the server.

const connect = function(hostIp, portNum) {
  console.log("Connecting ...");
  
  const conn = net.createConnection({
    host: hostIp ,// IP address here,
    port: portNum// PORT number here,
  });

  // HANDLE INCOMING DATA
  // event handler is saying if there is data, then we want to print out the data that the server sent over.
  // the data passed inside the parameter is built-in
  conn.on('data', (data) => {
    console.log('server says: ', data);
  });

  // HANDLE CONNECT - Client to send a reply back
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: DIN');
    /*
    setInterval(() => {
      conn.write('Move: left');
    }, 50);
  */
  });

  // Note - conn.write sends the message to the server, so of you want a message to show for us, use console.log
  // also, having two conn.write might mess things up because doing this command 2 times in a row only does the first one.
  // Because the server is actually parsing our strings and does something when it gets a particular command or message
  // so sending it anything else probably won't do anything, but worst case scenario, might mess things up


  // INTERPRET INCOMING DATA AS TEXT
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};

/* You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
The conn object that Node returned to you represents the connection that you have with the server.
The conn object is full of useful methods and properties that can now be used to interact with the server! */













