const {
  createAccessToken,
  cookieOptions,
} = require("../utills/generateTokens");
const { apiResponse } = require("../utills/ApiResponse");
const { apiError } = require("../utills/ApiError");
const User = require("../models/user.model");

const userCtrl = {
  registration: async (req, res) => {
    const { name, email, password } = req.body;
    const existedUser = await User.findOne({ email: email });

    if (existedUser) {
      return new apiError(409, "User with email already exists ");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email: email,
      password: passwordHash,
    });
    await user.save();

    const createdUser = await User.findById({ _id: user._id }).select(
      "-password"
    );

    if (!createdUser) {
      throw new apiError(500, "Some error occure while creating a user");
    }
    const accessToken = createAccessToken({ id: user._id });

    return res
      .status(201)
      .cookie("accessToken", accessToken, cookieOptions)
      .json(new apiResponse(200, "userCreated Successfully", createdUser));
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new apiError(401, "Invalid user credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new apiError(403, "incorrect password");
    }
    const accessToken = createAccessToken({ id: user._id });
    res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .json(new apiResponse(200, "Login successfull", user));
  },

  logout: async (req, res) => {
    return res
      .status(200)
      .clearCookie("accessToken")
      .json(new apiResponse(200, "logout successfull"));
  },

  getUserData: async (req, res) => {
    const user_id = req.query.id;

    const user = await User.findOne({ _id: user_id }).select("-password");

    if (!user) {
      throw new apiError(404, "user not Found");
    }
    return res
      .status(200)
      .json(new apiResponse(200, "data retrived successfully", user));
  },
};

module.exports = userCtrl;
