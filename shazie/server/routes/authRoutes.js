const express = require("express");
const router = express.Router();
const cors = require("cors");
const {test , registerUser, loginUser, getProfile, logoutUser, updateUser, updateProfile, getprofpic } = require("../controllers/authController");
//midleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get('/',test)
router.post('/register',registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.get('/logout', logoutUser)
router.post('/updateUser', updateUser)
router.post('/updateProfilePic', updateProfile)
router.post('/getprofilepic', getprofpic)

module.exports = router