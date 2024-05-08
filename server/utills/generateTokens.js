import { jsonwentoken as jwt } from "jsonwentoken";

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

export { createAccessToken, cookieOptions };
