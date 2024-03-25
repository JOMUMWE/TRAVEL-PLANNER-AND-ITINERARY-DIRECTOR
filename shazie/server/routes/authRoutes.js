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
router.get("/getflight",()=>{
  var Amadeus = require("amadeus");

  var amadeus = new Amadeus({
    clientId: "uRN292AgotWGG0mxFNWyR81AEAOqcmup",
    clientSecret: "eFPH1f4VpRRU0260",
  });

  amadeus.shopping.hotelOffersSearch
    .get({
      hotelIds: "RTPAR001",
      adults: "2",
      checkInDate: "2024-04-10",
      checkOutDate: "2024-04-12",
    })
    .then(function (response) {
      return response.body;
    })
    .catch(function (response) {
      console.error(response);
    });
})

module.exports = router