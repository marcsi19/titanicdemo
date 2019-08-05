##Titanic

## Start

create titanic and titanic-test database in postgresql.

* `npm install`
* `npm run seed`
* `npm run start-dev`
* `npm run test`

If you would like to directly load csv file to the database:

* `npm install`

Modify convert-csv-to-json node module:

node_module/convert-csv-to-json/src/csvToJson.js:
Replace csvToJson function to:

csvToJson(parsedCsv) {
let lines = parsedCsv.split(newLine)

let fieldDelimiter = this.getFieldDelimiter()

var regex = /,(?=(?:[^\"]_\"[^\"]_\")_(?![^\"]_\"))/

let headers = lines[0].split(regex)

let jsonResult = []

for (let i = 1; i < lines.length; i++) {

var regex = /,(?=(?:[^\"]_\"[^\"]_\")_(?![^\"]_\"))/

let currentLine = lines[i].split(regex)

if (stringUtils.hasContent(currentLine)) {

jsonResult.push(this.buildJsonResult(headers,

currentLine))
}
}
return jsonResult
}

* `npm run convertfile`
  If you do npm run convertfile command, don't forget to change script/seed.js file --instruction included in the file (STEP1-STEP2)

* `npm run seed`
* `npm run start-dev`
* `npm run test`

Docker:

docker-compose.yml:
change:
POSTGRES_USER: mypostgres
POSTGRES_PASSWORD: mypassword

* `docker build -t titanic .`
* `docker-compose pull`
* `docker-compose up -d`
