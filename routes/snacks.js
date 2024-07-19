const express = require("express");
const router = express.Router();
const Snacks = require("../model/Snacks");

router.get("/", async (req, res) => {
  try {
    const snacks = await Snacks.find();
    res.json(snacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
