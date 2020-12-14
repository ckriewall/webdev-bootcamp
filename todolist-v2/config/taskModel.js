import mongoose from 'mongoose'
const { Schema } = mongoose

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  complete: { type: Boolean, default: false },
})

const Task = mongoose.model('Task', taskSchema)

export default Task
