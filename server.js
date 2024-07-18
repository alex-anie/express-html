const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

//Static Files
app.use(express.static("public"));
app.use(express.static("css", express.static(__dirname + "public/css")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/layouts/catering", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "layouts", "catering.html"));
});

app.get("/layouts/order", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "layouts", "order.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port:: >>> ${PORT}`);
});
