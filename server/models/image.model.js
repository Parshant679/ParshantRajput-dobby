const mongoose = require("mongoose");

const imageFileSchecma = new mongoose.Schema(
  {
    userId: {
      type: Object,
      require: true,
      default: null,
    },
    name: {
      type: String,
      require: true,
      default: null,
    },
    public_id: {
      type: String,
      default: null,
    },
    imageUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const ImageFile = new mongoose.model("ImageFile", imageFileSchecma);
module.exports = ImageFile;
