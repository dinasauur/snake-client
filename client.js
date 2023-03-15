const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243' ,// IP address here,
    port: 50541// PORT number here,
  });

  // handle data incoming
  conn.on('data', (data) => {
    console.log('server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

connect();

module.exports = connect;

/* You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
The conn object that Node returned to you represents the connection that you have with the server.
The conn object is full of useful methods and properties that can now be used to interact with the server! */