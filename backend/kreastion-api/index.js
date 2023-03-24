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
const session = require('express-session');

// MongoDB database url from .env
const mongoURL = process.env.DATABASE_URL;

mongoose.connect(mongoURL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.on('connected', () => {
    console.log('Connected to database');
});

// setup express
const app = express();

// setup middleware
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

// routes for users
const userRoutes = require('./routes/users');
app.use('/api', userRoutes);

// routes for products
const productRoutes = require('./routes/products');
app.use('/api', productRoutes);

// route for static files - development
app.use('/static', express.static('public'));

// Start server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port ${process.env.SERVER_PORT}`);
});