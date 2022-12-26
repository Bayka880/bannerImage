const express = require("express");
const { bannerImageUpload } = require("../helper/filerHelper");
const { singleFileUpload } = require("../controller/singleFile.upload");
const { getAllBannerImages } = require("../controller/singleFile.upload");
const multer = require("multer");
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/bannerImage", upload.single("file"), singleFileUpload);
router.get("/banners", getAllBannerImages);
module.exports = router;
