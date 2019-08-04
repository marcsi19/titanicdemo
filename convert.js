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
