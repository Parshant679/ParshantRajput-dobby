import multer from "multer";
import file from "../";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
});

const upload = multer({
  storage: storage,
});

export { upload };
