const express = require("express");
const port = 3100;
const server = express();

server.get("/", (req, res) => {
  return res.send("Welcome to Inventory App");
});

server.listen(port, (err) => {
  if (err) console.log("Error listening to server: " + err);
  else console.log(`SERVER listening on port ${port}`);
});
