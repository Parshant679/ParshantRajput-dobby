const jwt = require("jsonwebtoken");
const { apiError } = require("../utills/ApiError");

const auth = (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    throw new apiError(401, "Unauthorized access");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) throw new apiError(400, "Invalid Authentication");
    req.user = user;
    next();
  });
};

module.exports = auth;
