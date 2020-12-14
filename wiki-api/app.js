import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import colors from 'colors'
import { connectDB } from './data/db.js'
import Article from './data/models/articleModel.js'

dotenv.config()

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))

connectDB()

// Single Article Routes
app
  .route('/articles/:id')
  .get(async (req, res) => {
    try {
      const articleId = req.params.id
      const article = await Article.findById(articleId)
      res.send(article)
    } catch (error) {
      res.send(error)
    }
  })
  .delete(async (req, res) => {
    try {
      const articleId = req.params.id
      const output = await Article.deleteOne({ _id: articleId })
      res.json(output)
    } catch (error) {
      console.log(error)
    }
  })
  .put(async (req, res) => {
    try {
      const articleId = req.params.id
      const article = await Article.findByIdAndUpdate(
        articleId,
        { title: req.body.title, content: req.body.content },
        { new: true, useFindAndModify: false }
      )
      res.json(article)
    } catch (error) {
      res.send(error)
    }
  })

// All Article Routes
app
  .route('/articles')
  .get(async (req, res) => {
    // Mongoose provides error handling so try/catch is optional
    await Article.find({}, (err, docs) => {
      if (!err) {
        res.send(docs)
      } else {
        console.log(err)
      }
    })
  })
  .post(async (req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    })

    try {
      newArticle.save()
      res.send('Article added')
    } catch (error) {
      console.log(error)
    }
  })
  .delete(async (req, res) => {
    try {
      const output = await Article.deleteMany()
      res.json(output)
    } catch (error) {
      console.log(error)
    }
  })

app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
