import dbConn from './db.js'
import { deleteFruit, getFruit, insertFruit } from './fruitActions.js'

dbConn()

try {
  deleteFruit()
  insertFruit()
} catch (error) {
  console.log(error)
}

// getFruit()
