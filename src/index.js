const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/js/data.js", function(req, res) {
  console.log("Returning /js/mega-file.js");
  setTimeout(function() {
    console.log("Finished timeout");
    res.sendFile(path.join(__dirname + "/public/mega-file.js"));
  }, 5000);
});

app.listen(3000, function() {
  console.log("Lab 1 listening on port 3000!");
});
