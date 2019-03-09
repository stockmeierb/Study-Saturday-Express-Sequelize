const router = require("express").Router();
const Seequelize = require("sequelize");
const db = require("../db/db");
const Student = require("../db/models/student");

router.get("/", async (req, res, next) => {
  res.send(await Student.findAll());
});

router.get("/:id", async (req, res, next) => {
  try {
    let stu = await Student.findOne({ where: { id: req.params.id } });
    if (stu === null) {
      res.status(404).send("Not Found");
    } else {
      res.send(stu);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {});

module.exports = router;
