/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png"
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 2),
    allowNull: true,
    validate: {
      min: 0.00,
      max: 4.00
    }
  },

  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }

});

// Export the student model
module.exports = Student;