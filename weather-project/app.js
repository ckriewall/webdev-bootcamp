const express = require('express')
const app = express()
const dotenv = require('dotenv')
const https = require('https')
const bodyParser = require('body-parser')
const port = 3000

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))

// Display an HTML form when users GET '/'
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// Collect query data from the index.html form.
// Send a formatted request to the OpenWeather API.
// Using the data returned from the API,
// format an HTML response and send it to the user.
app.post('/', (req, res) => {
  const api_key = process.env.OPEN_WEATHER_API_KEY
  const query = req.body.cityName
  const units = 'imperial'
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&units=' +
    units +
    '&appid=' +
    api_key

  https.get(url, (response) => {
    response.on('data', (data) => {
      // Select the API data points to return
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const description = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon

      // Format the HTML response
      res.write('<head><meta charset="utf-8"></head>')
      res.write('<h1>Weather Conditions</h1>')
      res.write('<h3>Today in ' + query + '</h3>')
      const imgUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
      res.write('<img src=' + imgUrl + '>')
      res.write(
        '<p>The temperature in ' +
          query +
          ' is currently ' +
          temp +
          '&deg F. Expect ' +
          description +
          '.</p>'
      )

      // Send the response
      res.send()
    })
  })
})

app.listen(3000, () => {
  console.log('Server is running on port ' + port + '...')
})
