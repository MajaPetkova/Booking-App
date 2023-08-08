const express = require("express");
const { getAllUsers, getUser, updateUser, deleteUser } = require("../controllers/userController");
const verifyToken = require("../utils.js/verifyToken");
const router = express.Router();

router.get("/checkAuthentication", verifyToken, (req, res, next)=>{
    res.send("Hello User, you are authenticated")
})
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser)



module.exports = router;