const express = require("express");
const PORT = 7777;

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
