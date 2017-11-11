const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log("Your app has started, sir.");
});
