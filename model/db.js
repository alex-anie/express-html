const mongoose = require("mongoose");
const Snacks = require("./Snacks");

mongoose
  .connect("mongodb://localhost:27017/popeyes_foods", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb is connected...");
  })
  .catch((err) => {
    console.log("Error Connecting to mongodb", err);
  });

async function run() {
  const res = await Snacks.find();
  console.log("dataset", res);
}
run();
