const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel= await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
