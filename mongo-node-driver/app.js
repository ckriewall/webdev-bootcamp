const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri, { useUnifiedTopology: true })

const run = async () => {
  try {
    // Connect to the 'food' database
    await client.connect()
    const db = client.db('foodDB')
    await db.command({ ping: 1 })
    console.log('Connected successfully to server')

    const coll = db.collection('fruit')

    // Insert documents into the 'fruit' collection
    // const result = await coll.insertMany(newFruit)

    // Find documents in the 'fruit' collection
    const cursor = coll.find({})
    if ((await cursor.count()) === 0) {
      console.log('No documents found!')
    }

    await cursor.forEach(console.dir)
  } finally {
    await client.close()
  }
}

const newFruit = [
  {
    name: 'Apple',
    desc: 'Crunchy',
  },
  {
    name: 'Banana',
    desc: 'Bendy',
  },
  {
    name: 'Cranberry',
    desc: 'Cringeworthy',
  },
]

run().catch(console.dir)
