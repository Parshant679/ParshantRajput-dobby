const { apiResponse } = require("../utills/ApiResponse");
const cloudinarymethods = require("../utills/cloudinary");
const ImageFile = require("../models/image.model");

const imageCtrl = {
  uploadImage: async (req, res) => {
    const { path } = req.file;
    const { userId, name } = req.body;

    const { public_id, secure_url } = await cloudinarymethods.uploadImage(path);

    const uploadedImage = new ImageFile({
      userId: userId,
      name: name,
      public_id: public_id,
      imageUrl: secure_url,
    });
    await uploadedImage.save();
    return res
      .status(201)
      .json(new apiResponse(200, "image uploaded Successfully", uploadedImage));
  },
  getImages: async (req, res) => {
    const { userId, pageNo } = req.query;
    const skipCount = (pageNo - 1) * 10;

    const userImages = await ImageFile.find({ userId: userId })
      .sort({ updatedAt: -1 })
      .skip(skipCount)
      .limit(10);

    return res
      .status(200)
      .json(new apiResponse(200, "images retrived Successfully", userImages));
  },
  searchImage: async (req, res) => {
    const { searchText, pageNo } = req.query;
    const skipCount = (pageNo - 1) * 10;
    const images = await ImageFile.find({
      name: { $regex: searchText, $options: "i" },
    })
      .skip(skipCount)
      .limit(10);

    return res
      .status(201)
      .json(new apiResponse(200, "images searched Successfully", images));
  },
};

module.exports = imageCtrl;
