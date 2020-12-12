import mongoose from 'mongoose'
const { Schema } = mongoose

const fruitSchema = new Schema({
  name: String,
  desc: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
})

const Fruit = mongoose.model('Fruit', fruitSchema)

export default Fruit
