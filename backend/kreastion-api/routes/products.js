/**
 * Routes for products
 */

const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// List all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get product by id
router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Create new product
router.post('/products', async (req, res) => {
    const product = new Product(req.body);

    try {
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Patch/update product
router.patch('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const productData = req.body;
        const options = { new: true };

        const resultProduct = await Product.findByIdAndUpdate(
            id, productData, options
        );

        res.json(resultProduct);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Delete a product
router.delete('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndRemove(id);
        res.json(deletedProduct);
    }
    catch (error) {
        res.send.status(400).json({ message: error.message });
    }
});

module.exports = router;