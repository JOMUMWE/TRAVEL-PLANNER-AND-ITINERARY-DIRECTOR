const User = require("../models/user");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name has been entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
      //check if passowrd is good
    }
    if (!password || password.length < 6) {
      return res.json({
        error:
          "Password is required and should be at least ^ characters length",
      });
    }
    //check email
    const exist = await User.findOne({email});
    if(exist){
        return res.json({
            error: 'Email is taken already'
        })
    }

    const user = await User.create({
        name,email,password
    })

    return res.json(user)
  } catch (error) {
    console.log(error)
  }
};

module.exports = { test, registerUser };
