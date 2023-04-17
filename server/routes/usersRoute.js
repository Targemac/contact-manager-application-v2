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

const isAuth = require("../middlewares/isAuth");

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
usersRoute.get("/", isAuth, getAllUsers);

// @define: get single user profile
// @route: /api/users/:id
// @privacy: protected
usersRoute.get("/:id", isAuth, getSingleUser);

// @define: update single user
// @route: /api/users/:id
// @privacy: protected
usersRoute.put("/:id", isAuth, updateSingleUser);

// @define: delete single user
// @route: /api/users/:id
// @privacy: protected
usersRoute.delete("/:id", isAuth, deleteSingleUser);

module.exports = usersRoute;
