const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("./model/db");
const Snacks = require("./model/Snacks");
const snacksRouter = require("./routes/snacks");

const PORT = process.env.PORT || 3000;

//Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/popeyes_foods", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB connected...");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB", err);
//   });

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

// API endpoint to fetch the snacks data
// app.get("/api/snacks", async (req, res) => {
//   try {
//     const snacks = await Snacks.find();
//     res.json(snacks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

app.use("/api/snacks", snacksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port:: >>> ${PORT}`);
});
