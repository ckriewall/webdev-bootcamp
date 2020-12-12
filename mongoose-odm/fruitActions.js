import Fruit from './fruitModel.js'

export const insertFruit = async () => {
  const res = await Fruit.insertMany([
    { name: 'Apple', desc: 'awesome', rating: 0 },
    { name: 'Banana', desc: 'bendy', rating: 10 },
    { name: 'Cranberry', desc: 'cringeworthy' },
  ])
  console.log(res)
}

export const deleteFruit = async () => {
  const res = await Fruit.deleteMany({})
  console.log(res)
}

export const getFruit = async () => {
  const res = await Fruit.find()
  console.log(res)
}
