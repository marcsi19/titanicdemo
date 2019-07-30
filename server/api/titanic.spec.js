const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Titanic = db.model('titanic')
describe('Order Route:', () => {
  before(() => {
    return db.sync({force: true})
  })
  afterEach(() => {
    return Promise.all([Titanic.truncate({cascade: true})])
  })
  describe('GET /gender', () => {
    it('responds with an array via JSON', async () => {
      const res = await request(app)
        .get('/api/gender')
        .expect('Content-Type', /json/)
        .expect(200)

      // res.body is the JSON return object
      expect(res.body).to.be.an.instanceOf(Array)
      expect(res.body).to.have.length(0)
    })
    it('returns only the id and Sex columns, if there is one in the database', async () => {
      await Titanic.create({
        Sex: 'female',
        PassengerId: 1,
        Name: 'Jenna'
      })
      const res = await request(app)
        .get('/api/gender')
        .expect(200)

      expect(res.body).to.be.an.instanceOf(Array)
      expect(res.body[0].Sex).to.equal('female')
      expect(res.body[0].id).to.equal(1)
      expect(res.body[0].Name).to.equal(undefined)
    })
  })
  describe('GET /class', () => {
    it('responds with an array via JSON', async () => {
      const res = await request(app)
        .get('/api/class')
        .expect('Content-Type', /json/)
        .expect(200)

      // res.body is the JSON return object
      expect(res.body).to.be.an.instanceOf(Array)
      expect(res.body).to.have.length(0)
    })
    it('returns only the id and Pclass columns if there is one in the database', async () => {
      await Titanic.create({
        Pclass: 2,
        PassengerId: 1,
        Name: 'Jenna'
      })
      const res = await request(app)
        .get('/api/class')
        .expect(200)

      expect(res.body).to.be.an.instanceOf(Array)
      expect(res.body[0].Pclass).to.equal(2)
      expect(res.body[0].id).to.equal(2)
      expect(res.body[0].Name).to.equal(undefined)
    })
  })
})
