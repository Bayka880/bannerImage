const SingleFile = require("../model/singleFile.module");
const SingleImage = require("../model/singleImage.module");
const fs = require("fs");
const path = require("path");

const singleFileUpload = async (req, res, next) => {
  console.log(req.file);
  try {
    let imageUpload = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    };
    const obj = new SingleFile(imageUpload);
    await obj.save();
    res.status(200).send("file uploaded succesfully");
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
const imageUpload = async (req, res, next) => {
  try {
    let imageUpload = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      filePath: req.file.path,
      endDate: req.body.endDate,
    };
    const obj = new SingleImage(imageUpload);
    await obj.save();
    res.status(200).send("file uploaded succesfully");
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
const getAllBannerImages = async (req, res, next) => {
  try {
    const file = await SingleFile.find();
    console.log(file);
    res.status(200).send(file);
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

module.exports = { singleFileUpload, getAllBannerImages, imageUpload };
