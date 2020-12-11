const express = require('express')
const bodyParser = require('body-parser')

const date = require(__dirname + '/date.js')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

/*
  Use res.render to return EJS templates.
  Pass in an object containing values for all template variables. 

  ex: res.render('list', { listTitle: date.getDate(), tasks: tasks })
*/

// Set EJS as the template engine
app.set('view engine', 'ejs')

let tasks = ['eat', 'clean', 'repeat']
let workTasks = ['shower', 'shave', 'work']

app.get('/', (req, res) => {
  res.render('list', { listTitle: date.getDate(), tasks: tasks })
})

app.post('/', (req, res) => {
  newTask = req.body.newItem
  if (req.body.list.toLowerCase() === 'work') {
    workTasks.push(newTask)
    res.redirect('/work')
  } else {
    tasks.push(newTask)
    res.redirect('/')
  }
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work', tasks: workTasks })
})

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
