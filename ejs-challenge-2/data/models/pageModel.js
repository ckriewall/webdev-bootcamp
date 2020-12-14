import mongoose from 'mongoose'
const { Schema } = mongoose

const pageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})

const Page = mongoose.model('Page', pageSchema)

export default Page
