const app = express.init();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const MongoClient = require("mongodb").MongoClient
const atlasURL = "mongodb+srv://admin:adminuser@281avcloud.cspsm.mongodb.net/SensorData?retryWrites=true&w=majority"

const mongoClient = new MongoClient(atlasURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoClient.connect(err => {
    if(err) {
        console.log("Problem connecting to Mongo!");
    } else {
        console.log("Connected to MongoDB");
    }

    const db = mongoClient.db("SensorData");
    const collection = db.collection("Sensor");
    const pipeline = {
        $match: {
            operationType: {
                $in: ["insert"]
            }
        }
    }

    io.on("connection", (socket) => {
        console.log("Client conencted with Socket ID = ${socket.id}")
        socket.on("newSensorData", (sensorData) => {
            io.emit();
        })

        socket.on("disconnect", () => {
            console.log(`chartPage disconnected!`)
        });
    })

    (() => { // IIFE; add test for cursor available

        console.log("startStream")
        const changeStream = collection.watch([pipeline], {fullDocument: "updateLookup"})

        changeStream.on("change", (change) => {
            console("New sensor data added: ", change.fullDocument._id);
            io.emit(change.fullDocument);
        })
    }
    )()
})
