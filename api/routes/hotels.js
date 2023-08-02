const express = require("express");
const router = express.Router();

const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels } = require("../controllers/hotelController");

router.get("/", getAllHotels);
router.post("/", createHotel);
router.put("/:id", updateHotel);
router.get("/:id", getHotel);
router.delete("/:id", deleteHotel);

module.exports = router;
