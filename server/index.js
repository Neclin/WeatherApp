const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.length("/", (req, res) => {
  res.send("Hello from the server!");
});
