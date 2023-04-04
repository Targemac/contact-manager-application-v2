const express = require("express");
const usersRoute = express.Router();

// importing usersController
const {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
} = require("../controllers/usersController");

// @define: register user
// @route: /api/users/register
// @privacy: public
usersRoute.post("/register", registerUser);

// @define: login user
// @route: /api/users/login
// @privacy: public
usersRoute.post("/login", loginUser);

// @define: get all users
// @route: /api/users
// @privacy: protected
usersRoute.get("/", getAllUsers);

// @define: get single user
// @route: /api/users/:id
// @privacy: protected
usersRoute.get("/:id", getSingleUser);

// @define: update single user
// @route: /api/users/:id
// @privacy: protected
usersRoute.put("/:id", updateSingleUser);

// @define: delete single user
// @route: /api/users/:id
// @privacy: protected
usersRoute.delete("/:id", deleteSingleUser);

module.exports = usersRoute;
