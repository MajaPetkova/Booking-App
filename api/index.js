const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const hotelsRoute = require("./routes/hotels");
const usersRoute = require("./routes/users");
const roomsRoute = require("./routes/hotelRooms");

async function start() {
  const app = express();

  try {
    const db = await mongoose.connect("mongodb://localhost:27017/booking");
    console.log("DB Ready");
  } catch (err) {
    console.log("Error connecting to DB");
    return process.exit(1);
  }
  //  middlewares
  app.use("/api/auth", authRoute);
  app.use("/api/hotels", hotelsRoute);
  app.use("/api/rooms", roomsRoute);
  app.use("/api/users", usersRoute);

  app.listen(5000, () => console.log("Connected to backend!"));
}
start();
