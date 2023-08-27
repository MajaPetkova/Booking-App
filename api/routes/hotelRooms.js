const express = require("express");
const { verifyAdmin } = require("../utils.js/verifyToken");
const router = express.Router();
const {createRoom, updateRoom, deleteRoom, getRoom, getRooms} = require("../controllers/roomController")

router.post("/:hotelId", verifyAdmin, createRoom )
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms)

module.exports = router;