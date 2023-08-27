const express = require("express");
const router = express.Router();

const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} = require("../controllers/hotelController");
const { verifyAdmin } = require("../utils.js/verifyToken");

router.get("/", getAllHotels);
router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.get("/:id", getHotel);
router.delete("/:id", verifyAdmin, deleteHotel);

module.exports = router;
