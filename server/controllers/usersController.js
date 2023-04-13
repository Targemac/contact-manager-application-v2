const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @define: register user
// @route: /api/users/register
// @privacy: public
const registerUser = async (req, res) => {
  const { first_name, last_name, phone, email, password } = req.body;

  try {
    // check if email exist
    const foundUser = await UserModel.findOne({ email: email.toLowerCase() });
    // console.log(foundUser);

    // if user found
    if (foundUser) {
      res.status(400).send({ message: "User already registered!" });
      return;
    }

    // create salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = await UserModel.create({
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // if user not created succesfully
    if (!newUser) {
      res.status(400).json({ message: "Unable to create user" });
      return;
    }

    // send confirmation email to user

    // reponse to front-end
    res
      .status(201)
      .json({ message: "User created successfully!", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(`Internal server error: ${error}`);
  }
};

// @define: login user
// @route: /api/users/login
// @privacy: public
const loginUser = async (req, res) => {
  // destructure email and password from req body
  const { email, password } = req.body;

  try {
    // check if email or password empty
    if (!email || !password) {
      res.status(400).send({ message: "All fields are required!" });
      return;
    }

    // check if email exists
    const foundEmail = await UserModel.findOne({ email: email.toLowerCase() });

    // check if passwords match
    if (!foundEmail || !(await bcrypt.compare(password, foundEmail.password))) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // if loggin details are correct

    // create a token
    const token = jwt.sign({ user: foundEmail._id }, process.env.LOGIN_SECRET, {
      expiresIn: "1d",
    });

    req.session.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
        return;
      } else {
        // sending token back to front-end
        res.status(200).send({ token: token });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @define: get all users
// @route: /api/users
// @privacy: protected
const getAllUsers = async (req, res) => {
  try {
    // fetch all users from db
    const allUsers = await UserModel.find();

    // send data to front end
    res.send(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @define: get single user
// @route: /api/users/:id
// @privacy: protected
const getSingleUser = async (req, res) => {
  // get id from params
  const { id } = req.params;

  try {
    // fetch single user from database
    const singleUser = await UserModel.findById(id);

    // return single user to frontend
    res.send(singleUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @define: update single user
// @route: /api/users/:id
// @privacy: protected
const updateSingleUser = async (req, res) => {
  // get id from params
  const { id } = req.params;
  const { first_name, last_name, phone } = req.body;

  try {
    // check if user exists
    const userExists = await UserModel.findById(id);

    // if user doesnt exist
    if (!userExists) {
      res.status(404).send("User not found");
      return;
    }

    // console.log(`the value is : ${req.body?.first_name}`);

    // update user details here
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        first_name: req.body?.first_name,
        last_name: req.body?.last_name,
        phone: req.body?.phone,
      },
      { new: true }
    );

    // return updated user to frontend
    res.send(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @define: delete single user
// @route: /api/users/:id
// @privacy: protected
const deleteSingleUser = async (req, res) => {
  // get id from params
  const { id } = req.params;

  try {
    // check if user exists
    const userExists = await UserModel.findById(id);

    // if user doesnt exist
    if (!userExists) {
      res.status(404).send("User not found");
      return;
    }

    // delete user here
    const deletedUser = await UserModel.findByIdAndDelete(id);

    // return deleted user to frontend
    res.send(deletedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
