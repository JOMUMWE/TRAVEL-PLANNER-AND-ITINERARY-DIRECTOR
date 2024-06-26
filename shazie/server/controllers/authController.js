const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  var Amadeus = require("amadeus");

  var amadeus = new Amadeus({
    clientId: "uRN292AgotWGG0mxFNWyR81AEAOqcmup",
    clientSecret: "eFPH1f4VpRRU0260",
  });
  amadeus.referenceData.locations.hotel
    .get({
      keyword: "PARI",
      subType: "HOTEL_GDS",
    })
    .then((response) => res.json(response))
    .catch((err) => console.error(err));
};

const getprofpic = async (req,res) => {
  const {email} = req.body
  const user = await User.findOne({ email });
  res.json({ profpic:user.profilePic });
}

const logoutUser = (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.json('logged out')
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    //check if name has been entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //check if passowrd is good
    if (!password || password.length < 6) {
      return res.json({
        error:
          "Password is required and should be at least 6 characters length",
      });
    }
    //check phonenumber
    if (!Number(phoneNumber)) {
      return res.json({
        error: "input the correct format of phone number(numbers only)",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      profilePic:""
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name, phoneNmber: user.phoneNumber},
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "password do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => { 
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(false);
  }
};

const updateProfile = async(req,res) => {
  const {img, id} = req.body;
  try {
     await User.updateOne(
       { _id: id },
       {
         $set: {
           profilePic: img
         },
       }
     );
    return res.json({ status: "ok", data: "updated" });
  } catch (error) {
     return res.json({ error: error });
  }
}

const updateUser = async (req,res) => {
  const { name, password, phoneNumber, id } = req.body;
  if (!password || password.length < 6) {
    return res.json({
      error: "Password is required and should be at least 6 characters length",
    });
  }
  //check if passowrd is good
  if (!password || password.length < 6) {
    return res.json({
      error: "Password is required and should be at least 6 characters length",
    });
  }
  const hashedPassword = await hashPassword(password);
  try {
    await User.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          password: hashedPassword,
          phoneNumber: phoneNumber,
        },
      }
    );
    return res.json({ status: "ok", data: "updated" });
  } catch (error) {
    return res.json({ error: error });
  }
}
const getflight = async(req,res) =>{
  var { flightFrom, flightTo, Depature, AdultNumber} = req.body;
  var Amadeus = require("amadeus");
  var amadeus = new Amadeus({
    clientId: "uRN292AgotWGG0mxFNWyR81AEAOqcmup",
    clientSecret: "eFPH1f4VpRRU0260",
  });
  try{
    var body = await amadeus.shopping.flightOffersSearch.get({
    originLocationCode: flightFrom,
    destinationLocationCode: flightTo,
    departureDate: Depature,
    adults: AdultNumber,
    max: '5',
  });
  console.log(body.data[0].itineraries);
  return res.json(body.data)
  }catch(error){
    console.log(error)
    return res.json(error)
  }
  
}

module.exports = { test, registerUser, loginUser, getProfile, logoutUser, updateUser, updateProfile, getprofpic,getflight };
