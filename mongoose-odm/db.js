import mongoose from 'mongoose'

const dbConn = () => {
  try {
    mongoose.connect('mongodb://localhost:27017/foodDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Mongoose connected')
  } catch (error) {}
}

export default dbConn
