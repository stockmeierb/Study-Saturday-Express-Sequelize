"use strict";

const Sequelize = require("sequelize");
const db = require("../db");
const Test = require("./test");

const Student = db.define("student", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true }
  }
});

Student.beforeCreate(student => {
  student.firstName = capName(student.firstName);
  student.lastName = capName(student.lastName);
});

function capName(name) {
  let str = name.split("");
  str[0] = str[0].toUpperCase();
  return str.join("");
}

// console.log("Students object (in Student.js): ", Student);
// console.log("Test object (in Student.js): ", Test);

//Only works in student.js... why?
Test.belongsTo(Student);
Student.hasMany(Test); //not required

module.exports = Student;
