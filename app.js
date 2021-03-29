const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;
const chalk = require("chalk");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/restapi", require("./routers/restapi"));

app.listen(port, () => {
  console.log(chalk.green("Rest Api Başarıyla Başlatıldı"));
});
