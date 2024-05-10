const jwt = require("jsonwebtoken");

const cookieOptions = {
  httpOnly: true,
  secure: true,
  path: "/",
  sameSite: "none",
};

const createAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return accessToken;
};

module.exports = { createAccessToken, cookieOptions };
