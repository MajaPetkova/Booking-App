const express = require("express");
const mongoose = require("mongoose");

async function start() {
  const app = express();

  try {
    const db = await mongoose.connect("mongodb://localhost:27017/booking");
    console.log("DB Ready");
  } catch (err) {
    console.log("Error connecting to DB");
    return process.exit(1)
  }

   app.get("/", (req, res)=>{
    res.send("Hello")
   })

  app.listen(5000, () => console.log("Connected to backend!"));
}
start();
