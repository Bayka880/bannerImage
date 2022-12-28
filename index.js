const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 5005;
const ATLAS_CONNECTION =
  process.env.ATLAS_CONNECTION ||
  "mongodb+srv://Bayanjargal:Baynaa_1997@mstar-class3.5zhvbpv.mongodb.net/bannerImages";
const app = express();
const router = require("./router/router.banner");
app.use(cors());
app.use(express.json());

app.use("/bannerImage", express.static(path.join(__dirname, "bannerImage")));

app.use("/banner", router);
mongoose.set("strictQuery", false);

mongoose
  .connect(ATLAS_CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to server");
    app.listen(PORT, () => {
      console.log("My app is runing " + PORT);
    });
  });
