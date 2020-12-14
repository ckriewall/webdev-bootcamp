import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import ejs from 'ejs'
import moment from 'moment'

dotenv.config()

import { connectDB } from './data/db.js'
import { addPost, getPost, getPosts } from './actions/postActions.js'
import { getPageContent } from './actions/pageActions.js'
const port = 3000

connectDB()

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', async (req, res) => {
  const title = 'home'
  const pageContent = await getPageContent(title)
  const posts = await getPosts()
  res.render('home', {
    homeContent: pageContent,
    posts: posts,
  })
})

app.get('/about', async (req, res) => {
  const about = 'about'
  const pageContent = await getPageContent(about)
  res.render('about', { aboutContent: pageContent })
})

app.get('/contact', async (req, res) => {
  const title = 'contact'
  const pageContent = await getPageContent(title)
  res.render('contact', { contactContent: pageContent })
})

app.get('/compose', (req, res) => {
  res.render('compose')
})

app.post('/compose', async (req, res) => {
  const post = {
    title: req.body.postTitle,
    body: req.body.postBody,
    date: Date.now(),
  }
  const newPost = await addPost(post)
  res.redirect('/')
})

app.get('/posts/:id', async (req, res) => {
  const postId = req.params.id
  const post = await getPost(postId)

  if (post) {
    res.render('post', {
      title: post.title,
      date: moment(post.date).format('MMMM Do YYYY, h:mm:ss a'),
      body: post.body,
    })
  } else {
    res.redirect('/404')
  }
})

app.get('/404', (req, res) => {
  res.render('404', { errorContent: 'Oopsy daisy!' })
})

app.listen(port, () => {
  console.log('Server started on port ' + port)
})
