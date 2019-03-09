"use strict";
const Sequelize = require("sequelize");
const db = require("../db");
const Student = require("./student");

const Test = db.define("test", {
  subject: { type: Sequelize.STRING, allowNull: false },
  grade: { type: Sequelize.INTEGER, allowNull: false }
});

// console.log("Test object (in Test.js): ", Test);
// console.log("Student object (in Test.js): ", Student);

//Breaks if included
// Test.belongsTo(Student);
// Student.hasMany(Test); //not required

module.exports = Test;
