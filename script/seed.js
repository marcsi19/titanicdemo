'use strict'

const {db, Titanic} = require('../server/db/models')
// STEP1: if you do npm run convertfile comment out the line below:
const trains1 = require('./csv/trainfile.json')

// STEP2: if you do npm run convertfile uncomment the line below:
// const trains1 = require('./csv/trains.json')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  // const titanic = await Promise.all([
  //   await Promise.all(modeldata.map(train => Titanic.create(train)))
  // ])

  const titanic = await Promise.all([
    await Promise.all(trains1.map(train => Titanic.create(train)))
  ])

  console.log(`seeded ${titanic.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
