// Dependencies //
const express = require("express");
const logger = require("morgan"); 
const mongoose = require("mongoose");

// Set the port application //
const PORT = process.env.PORT || 8080

// Create express app instance //
const app = express();

// Logger middleware for Express //
app.use(logger("dev"));

// Parse application body as JSON //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app //
app.use(express.static("public"));

// Requiried Routes //
app.use(require("./routes/html"));
app.use(require("./routes/api"));

// Connecting to MongoDb //
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false
});

// Start server to listen to client requests //
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });