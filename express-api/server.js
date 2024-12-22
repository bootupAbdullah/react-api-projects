// <------------------------------------------- IMPORT AND CONFIGURATION -------------------------->
require('dotenv').config({ path: '../.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
dotenv.config();
const app = express();
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
    console.log('movie recommendation app is live, start posting');
  });