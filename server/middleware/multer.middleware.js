const multer = require("multer");
const file = require("../");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
});

const upload = multer({
  storage: storage,
});

module.exports = { upload };
