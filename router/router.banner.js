const express = require("express");
const { bannerImageUpload } = require("../helper/filerHelper");
const { singleFileUpload } = require("../controller/singleFile.upload");
const { imageUpload } = require("../controller/singleFile.upload");
const { getAllBannerImages } = require("../controller/singleFile.upload");
const multer = require("multer");
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/image", bannerImageUpload.single("file"), imageUpload);
router.get("/banners", getAllBannerImages);
module.exports = router;
