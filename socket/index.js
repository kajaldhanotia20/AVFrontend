
const express = require("./express.js"),
	mongoose = require("mongoose");

// Use env port or default
const port = 3300;

//establish socket.io connection
const app = express.init();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const atlasURL = "mongodb+srv://admin:adminuser@281avcloud.cspsm.mongodb.net/SensorData?retryWrites=true&w=majority";

//start the server
server.listen(port, () => console.log(`Server now running on port ${port}!`));

io.on("connection", (socket) => {
	console.log("socket.io: Client connected: ", socket.id);

	socket.on("disconnect", () => {
		console.log("socket.io: Client disconnected: ", socket.id);
	});
});

//connect to db
mongoose.connect(atlasURL, {
  useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("MongoDB database connected");

	const pipeline = {
		$match: {
			operationType: {
				$in: ["insert"]
			}
		}
	};

	console.log("Setting change streams");
	const changeStream = connection.collection("Sensor").watch([pipeline], {
		fullDocument: "updateLookup"
	});

	changeStream.on("change", (change) => {
		console.log("New sensor data added: ", change.fullDocument._id);
		io.emit("newSensorRecord", change.fullDocument);
	});
});


connection.on("error", (error) => console.log("Error: " + error));
