/**
 * Routes for orders
 */

const express = require('express')
const router = express.Router();

const Order = require('../models/order')


// Create new order
router.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    order.markModified('dateCreated');

    // probably verify product here (price mostly)

    try {
        const savedOrder = await order.save();
        res.status(200).json(savedOrder);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Confirm order (status == paid)
router.patch('/order/confirm/:id', async (req, res) => {
    //
});