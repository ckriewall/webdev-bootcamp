import mongoose from 'mongoose'
const { Schema } = mongoose

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
})

const Post = mongoose.model('Post', postSchema)

export default Post
