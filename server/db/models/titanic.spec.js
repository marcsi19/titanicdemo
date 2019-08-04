const {expect} = require('chai')
const db = require('../index')
const Titanic = require('./titanic')

describe('Titanic model', () => {
  describe('Validations', () => {
    let newTitanic
    beforeEach(() => {
      newTitanic = Titanic.build()
    })

    it('should require PassengerId', async () => {
      try {
        await newTitanic.validate()
        throw new Error(
          'validation was successful but should have failed without `PassengerId`'
        )
      } catch (error) {
        expect(error.message).to.contain('PassengerId cannot be null')
      }
    })

    it('should require Name', async () => {
      try {
        await newTitanic.validate()
        throw new Error(
          'validation was successful but should have failed without `Name`'
        )
      } catch (error) {
        expect(error.message).to.contain('Name cannot be null')
      }
    })

    it('should have a Sex property of only "male" or "female"', async () => {
      newTitanic.PassengerId = '3'
      newTitanic.Name = 'Julia Smith'
      newTitanic.Sex = 'child'

      try {
        await newTitanic.validate()
        throw Error(
          'Trying to `save` a titanic instance with invalid `Sex` should have failed.'
        )
      } catch (err) {
        // expect(err).to.exist
        expect(err.message).to.contain('isIn')
      }
    })
  })
})
