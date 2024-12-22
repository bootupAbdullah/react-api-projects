// <------------------------------------------- IMPORT AND CONFIGURATION -------------------------->
require('dotenv').config({ path: '../.env' }); // Load environment variables first
const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Import CORS middleware

const app = express(); // Initialize Express app
// <------------------------------------------- DATABASE CONNECTION------------------------------->
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

// <------------------------------------------- CONRTROLLERS ------------------------------------->

// <------------------------------------------- MIDDLEWARE --------------------------------------->
app.use(express.json());
app.use(cors())

// !! <-----------------------------------------ROUTES -------------------------------------------->

// <------------------------------------------- Start Server --------------------------------------->
app.listen(3001, () => {
    console.log('React Portfolio App is live, let\'s go!');
  });