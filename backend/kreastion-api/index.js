/**
 * API server for Kreastion Shop.
 */

// Import settings from .env
require('dotenv').config();

/**
 * Requires
 */
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

// MongoDB database url from .env
const mongoURL = process.env.DATABASE_URL;

/**
 * Connect to database
 */
mongoose.connect(mongoURL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.on('connected', () => {
    console.log('Connected to database');
});

/**
 * Setup express
 */
const app = express();
app.use(cors());
app.use(express.json());

/**
 * Setup routes
 */
const routes = require('./routes/products');
app.use('/api', routes);

// Start server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port ${process.env.SERVER_PORT}`);
});