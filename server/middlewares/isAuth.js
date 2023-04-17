const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  // check if authorization is present in headers
  const headers = req?.headers?.authorization || req?.headers?.Authorization;

  //get token
  const token = headers?.split(" ")[1];

  //if no token, status of 401
  if (!token) {
    res.status(401).send({ message: "No Token Provided" });
    return;
  }

  //verify token
  jwt.verify(token, process.env.LOGIN_SECRET, (err, decoded) => {
    if (err) {
      res.status(403);
      throw new Error(`Invalid Token`);
    }

    req.user = decoded;
  });
  // pass next fxn
  next();
};

module.exports = isAuth;
