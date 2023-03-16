const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

//connect();

// pass the object returned from connect into the setupInput function.
setupInput(connect());