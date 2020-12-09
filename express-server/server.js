import express from 'express'

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>')
})

app.get('/contact', (req, res) => {
  res.send('Contact me at fake@fake.co')
})

app.get('/about', (req, res) => {
  res.send('This is my bio.')
})

app.listen(port, () => {
  console.log('Server listening on port ' + port + '...')
})
