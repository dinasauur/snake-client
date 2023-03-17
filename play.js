const { connect } = require("./client");
const { setupInput } = require("./input");
const { IP, PORT } = require("./constants");


//connect();

// pass the object returned from connect into the setupInput function.
setupInput(connect(IP, PORT));