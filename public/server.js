const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//Static Files
app.use(express.static("public"));
app.use(express.static("css", express.static(__dirname + "public/css")));
// app.use(express.static("js", express.static(__dirname + "public/js")));

app.get("", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port:: >>> ${PORT}`);
});
