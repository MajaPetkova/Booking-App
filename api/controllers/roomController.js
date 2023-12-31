const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const createError = require("../utils.js/error");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};
const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedRoom);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};
const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne({"roomNumbers._id": req.params.id}, {
      $push: {
        "roomNumbers.$.unavailableDates": req.body.dates
      }
    } )
    res.status(200).json("Room status has been updated");
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};
const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
    res.status(200).json("Room has been deleted");
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};
const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};
const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};


module.exports = { createRoom, getRooms, getRoom, updateRoom, deleteRoom, updateRoomAvailability};
