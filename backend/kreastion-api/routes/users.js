/**
* Routes for users
*/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const User = require('../models/user');

const { isAuthenticated } = require('./middlewares');


// List all users
router.get('/users', isAuthenticated, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get user by id
router.get('/user/:id', isAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Create new user
router.post('/users', isAuthenticated, async (req, res) => {
    const user = new User(req.body);
    user.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    try {
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// User login
router.post('/login', async (req, res) => {    
    const user = await User.findOne({ email: req.body.email });
    let authorized = false;
    
    if (user) {
        authorized = await bcrypt.compare(req.body.password, user.password);
    }

    if (!authorized) {
        res.status(400).json({ message: "Credentials don't match" });
        return;
    }

    const { password, ...responseUser } = user._doc;
    
    req.session.regenerate((error) => {
        if (error) res.status(500).json({ message: error.message });
        
        req.session.user = responseUser;

        req.session.save((error) => {
            if (error) res.status(500).json({ message: error.message });

            res.status(200).json(req.session.user);
        });
    });
});


// User checkin
router.get('/checkin', async (req, res) => {
    if (req.session.user) {
        res.status(200).json(req.session.user);
    }
    else {
        res.status(400).json({ message: 'no session'});
    }
});


// User logout
router.get('/logout', isAuthenticated, async (req, res) => {
    req.session.user = null;
    req.session.save((error) => {
        if (error) res.status(500).json({ message: error.message });
        
        req.session.regenerate((error) => {
            if (error) res.status(500).json({ message: error.message });
            
            res.status(200).json({ message: 'success' });
        });
    });
});

module.exports = router;