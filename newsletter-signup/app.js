const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const port = 3000
const api_endpoint =
  'https://us7.api.mailchimp.com/3.0/lists/2800e5487c/members'

// Use a static folder to hold CSS and images
app.use(express.static('public'))

// Use body-parser to retrieve form data
app.use(bodyParser.urlencoded({ extended: true }))

// GET returns signup form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html')
})

// On error redirect to the signup form
app.post('/failure', (req, res) => {
  res.redirect('/')
})

// POST sends subscriber data to Mailchimp
app.post('/', (req, res) => {
  // Get subscriber data from HTML form
  const { first, last, email } = req.body

  // Add subscriber data to JSON object
  const subscriber = JSON.stringify({
    email_address: email,
    status: 'subscribed',
    merge_fields: { FNAME: first, LNAME: last },
  })

  // Configure axios options
  const config = {
    method: 'post',
    url: api_endpoint,
    headers: {
      Authorization: 'Basic base64encodedString--key:my_api_key',
      'Content-Type': 'application/json',
    },
    data: subscriber,
  }

  // Asynchronous function to contact Mailchimp
  const addSubscriber = async () => {
    try {
      const apiResponse = await axios(config)
      // console.log(apiResponse)
      if (apiResponse.status === 200) {
        res.sendFile(__dirname + '/success.html')
      } else {
        res.sendFile(__dirname + '/failure.html')
      }
      console.log(apiResponse.data)
    } catch (error) {
      console.log(error)
      res.sendFile(__dirname + '/failure.html')
    }
  }

  addSubscriber()
})

// Listen for connections to Express
app.listen(port, () => {
  console.log('Server listening on port ' + port + '...')
})
