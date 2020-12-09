// ES6 modules don't support __dirname.
// To preserve _dirname support we use CommonJS to load packages.
// https://nodejs.org/api/esm.html#esm_no_filename_or_dirname

const express = require('express')

const app = express()
const port = 3000

// body-parser allows us to retrieve form data by name
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// Handle GET requests to "/"
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// Handle POST requests to "/"
app.post('/', (req, res) => {
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)
  const result = num1 + num2
  res.send(num1 + ' + ' + num2 + ' = ' + result)
})

// Listen for client connections
app.listen(port, () => {
  console.log('Server listening on port ' + port + '...')
})
