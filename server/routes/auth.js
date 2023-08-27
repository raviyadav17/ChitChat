const {
  register,
  login,
  setAvatar,
  getAllUsers,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
// get request -> not sending any data.
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
