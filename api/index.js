const express = require("express");
const mongoose = require("mongoose");
const cookieParser= require("cookie-parser")
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
  app.use(cookieParser())
  app.use(express.json())
  app.use("/api/auth", authRoute);
  app.use("/api/hotels", hotelsRoute);
  app.use("/api/rooms", roomsRoute);
  app.use("/api/users", usersRoute);

app.use((err, req, res, next)=>{
  const errorStatus= err.status || 500;
  const errorMsg = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status:errorStatus,
    message:errorMsg,
    stack:err.stack
  })
})


  app.listen(5000, () => console.log("Connected to backend!"));
}
start();
