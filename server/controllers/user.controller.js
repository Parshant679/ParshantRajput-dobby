import { createAccessToken } from "../utills/generateTokens";
import User from "../models/user.model";

const userCtrl = {
  registration: async (req, res) => {
    const { name, email, password } = req.body;
    const existedUser = await User.findOne({ email: email });

    if (existedUser) {
      return new apiError(409, "User with email already exists ");
    }
  },
  login: async (req, res) => {},
  logout: async (req, res) => {},
  getUserData: async (req, res) => {},
};

export default userCtrl;
