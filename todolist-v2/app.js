import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { connectDB } from './config/db.js'
import Task from './config/taskModel.js'

const app = express()
const port = 3000
dotenv.config()
connectDB()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  res.render('list', {
    listTitle: 'Today',
    tasks: await Task.find(),
  })
})

app.post('/', (req, res) => {
  const submittedTask = req.body.newItem
  const newTask = new Task({ name: submittedTask })
  newTask.save()
  res.redirect('/')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.post('/delete', (req, res) => {
  Task.deleteOne({ _id: req.body.checkDelete }, (err) => {
    if (!err) {
      res.redirect('/')
    }
  })
})

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
