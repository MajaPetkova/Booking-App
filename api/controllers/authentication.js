const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../utils.js/error");

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).send("User successfully crated");
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404,"User not found"));
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(createError( "Username or Password are not correct"));
    }
    const token= jwt.sign({id:user._id, isAdmin:user.isAdmin}, "fgcjkjl;'kkvghhjgk" );

    const{password, hashedPassword, ...otherDetails}= user._doc;
    res.cookie("access_token", token, {httpOnly: true}).status(200).json({...otherDetails});
  } catch (err) {
    next(err);
  }
};
module.exports = {
  register,
  login,
};
