const { connect } = require("./client");
const { setupInput } = require("./input");
const { IP, PORT } = require("./constants");

console.log("Connecting ...");

//connect();

// pass the object returned from connect into the setupInput function.
setupInput(connect(IP, PORT));