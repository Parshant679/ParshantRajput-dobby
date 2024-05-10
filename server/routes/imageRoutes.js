const express = require("express");
const { upload } = require("../middleware/multer.middleware");
const auth = require("../middleware/auth.middleware");
const imageCtrl = require("../controllers/image.controller");
const router = express.Router();

// uploading image

router
  .route("/image/")
  .get(auth, imageCtrl.getImages)
  .post(auth, upload.single("file"), imageCtrl.uploadImage);

router.route("/search").get(imageCtrl.searchImage);

module.exports = router;
