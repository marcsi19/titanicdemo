let csvToJson = require('convert-csv-to-json')

let fileInputName = './script/csv/train.csv'
let fileOutputName = './script/csv/trains.json'

async function convertFileToJson() {
  try {
    await csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName)
    // await csvToJson.formatValueByType().getJsonFromCsv(fileInputName)
    await csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName)
  } catch (err) {
    console.error(err)
  }
}

convertFileToJson()

// const csvFilePath = './script/csv/train.csv'
// const csv = require('csvtojson')

// const converter = csv({
//   noheader: true,
//   trim: true,
//   quote: true
// })

// csv()
//   .fromFile(csvFilePath)
//   .then(jsonObj => {
//     console.log(jsonObj)
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */
//   })

// Async / await usage
// const jsonArray=await csv().fromFile(csvFilePath);
