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

// router.put('/:id', async (req, res, next) => {
//   try {
//     const id = +req.params.id
//     const titanic = await Titanic.findById(id)
//     const editedTitanic = await titanic.update(req.body)
//     res.status(204)
//     res.json(editedTitanic)
//   } catch (err) {
//     next(err)
//   }
// })
router.put('/', async (req, res, next) => {
  try {
    // const id = +req.params.id
    console.log(req.body)
    const id = +req.body.id
    console.log('ID', req.body.id)
    const titanic = await Titanic.findByPk(id)
    const editedTitanic = await titanic.update(req.body)
    res.status(204)
    res.json(editedTitanic)
  } catch (err) {
    next(err)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const newTitanic = await Titanic.create({
      PassengerId: req.body.id,
      Survived: req.body.Survived,
      Pclass: req.body.Pclass,
      Name: req.body.Name,
      Sex: req.body.Sex,
      Age: req.body.Age,
      SibSp: req.body.SibSp,
      Parch: req.body.Parch,
      Ticket: req.body.Ticket,
      Fare: req.body.Fare,
      Cabin: req.body.Cabin,
      Embarked: req.body.Embarked
    })
    res.json(newTitanic)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Titanic.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
