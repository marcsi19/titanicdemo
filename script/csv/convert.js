let csvToJson = require('convert-csv-to-json')

let fileInputName = 'train.csv'
let fileOutputName = 'trains.json'

async function convertFileToJson() {
  await csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName)
}

convertFileToJson()
