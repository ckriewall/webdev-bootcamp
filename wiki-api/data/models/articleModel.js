import mongoose from 'mongoose'
const { Schema } = mongoose

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

const Article = mongoose.model('Article', articleSchema)

export default Article
