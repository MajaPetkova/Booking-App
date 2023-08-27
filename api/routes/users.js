const express = require("express");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils.js/verifyToken");

const router = express.Router();

router.get("/checkAuthentication", verifyToken, (req, res, next) => {
  res.send("Hello User, you are authenticated");
});
router.get("/checkUser/:id", verifyUser, (req, res, next) => {
  res.send("Hello User, you are authenticated and you can delete your account");
});
router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello Admin, you are logged in and you can delete any account");
  });
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
