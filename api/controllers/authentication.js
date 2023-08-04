const User = require("../models/User");

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(200).send("User successfully crated")
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
};
