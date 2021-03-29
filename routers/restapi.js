const router = require("express").Router();
const Data = require("../database/schema/userConfig");

router.get("/", async (req, res) => {
  let userData = await Data.find({});
  if (userData.length >= 1) {
    res.send(userData);
  } else {
    res.send({ message: "Database Not Found", Status: 404 });
  }
});
router.get("/:name", async (req, res) => {
  let name = req.params.name;
  let userData = await Data.findOne({ name: name });
  if (userData) {
    res.send(userData);
  } else {
    res.send({ message: "Database Not Found", Status: 404 });
  }
});
router.post("/add", async (req, res) => {
  let data = await Data.findOne({ name: req.body.name });
  if (!data) {
    let newData = await Data.create({
      name: req.body.name,
      age: req.body.age,
      registerList: [{ isim: "Deneme | 14", type: "Erkek" }],
    });
    return res.redirect("/restapi");
  } else {
    return res.send({ message: "Database Zaten Var", Status: 502 });
  }
});

module.exports = router;
