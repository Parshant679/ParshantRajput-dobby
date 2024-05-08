import express from "express";
import { upload } from "../middleware/multer.middleware";
import { auth } from "../middleware/auth.middleware";
import imageCtrl from "../controllers/image.controller";
const router = express.Router();

// uploading image

router
  .route("/image/")
  .get(auth, imageCtrl.getImages)
  .post(auth, upload.single("file"), imageCtrl.uploadImage);

router.route("/search").get(imageCtrl.searchImage);

export default router;
