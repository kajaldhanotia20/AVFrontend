const io = require('./index').io

const MongoClient = require('mongodb').MongoClient
const atlasURL = "mongodb+srv://admin:adminuser@281avcloud.cspsm.mongodb.net/SensorData?retryWrites=true&w=majority"

const client = new MongoClient(atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

client.connect(err => {
  if (err) {
    console.log(`Core problem connecting to Mongo!`)
  } else {
    console.log('Core connected to MongoDB')
  }
  const db = client.db('SensorData')
  const collection = db.collection('Sensor')

  const pipeline = {
    $match: {
      operationType: {
        $in: ['insert']
      }
    }
  }

  io.on('connection', socket => {
    console.log(`chartPage connected: ${socket.id}`)
    socket.on('disconnect', () => {
      console.log(`chartPage disconnected!`)
    })
  })

  const transmit = document => {
    io.emit('chartData', document)
    console.log(`packet emitted: ${document}`)
  }

  (() => { // IIFE; add test for cursor available
    console.log(`startStream`)
    const changeStream = collection.watch([pipeline], {
      fullDocument: 'updateLookup' })
    changeStream.on('change', document => {
      const packet = []
      packet[0] = document.fullDocument.TimeStamp // could parse from object:_id
      packet[1] = document.fullDocument.Data
      transmit(document)
      console.log(document)
    })
  }
  )()
})
