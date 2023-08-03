const multer = require("multer");
const bannerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:\\Users\\Bayanaa\\Pictures");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const bannerImageUpload = multer({
  storage: bannerStorage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Please uploade a Image"));
    }
    cb(undefined, true);
  },
});

module.exports = { bannerImageUpload };
