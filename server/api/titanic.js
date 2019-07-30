const router = require('express').Router()
const {Titanic} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = await Titanic.findAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})
router.get('/gender', async (req, res, next) => {
  try {
    const gender = await Titanic.findAll({
      attributes: ['id', 'Sex']
    })
    res.json(gender)
  } catch (err) {
    next(err)
  }
})

router.get('/class', async (req, res, next) => {
  try {
    const age = await Titanic.findAll({
      attributes: ['id', 'Pclass']
    })
    res.json(age)
  } catch (err) {
    next(err)
  }
})
