const Sequelize = require('sequelize')
const db = require('../db')

const Titanic = db.define(
  'titanic',
  {
    PassengerId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Survived: {
      type: Sequelize.INTEGER
    },
    Pclass: {
      type: Sequelize.INTEGER,
      validate: {
        isIn: [[1, 2, 3]]
      }
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Sex: {
      type: Sequelize.STRING,
      validate: {
        isIn: [['male', 'female']]
      }
    },
    Age: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    SibSp: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    Parch: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    Ticket: {
      type: Sequelize.TEXT
    },
    Fare: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    Cabin: {
      type: Sequelize.STRING
    },
    Embarked: {
      type: Sequelize.STRING
    }
  },
  {
    hooks: {
      beforeCreate: titanic => {
        if (typeof titanic.Age === 'string') {
          titanic.Age = 0
          titanic.Age = +titanic.Age
        }
      }
    }
  }
)

module.exports = Titanic
