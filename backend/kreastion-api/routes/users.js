/**
* Routes for users
*/

const express = require('express');
const router = express.Router();

// User login
router.post('/user/login', async (req, res) => {
    console.log(req.body);
    
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ message: 'invalid login' });
        return;
    }
    
    req.session.regenerate((error) => {
        if (error) res.status(500).json({ message: error.message });
        
        req.session.user = {
            _id: '349080934',
            firstName: 'Nathan',
            lastName: 'Kerstens'
        };

        req.session.save((error) => {
            if (error) res.status(500).json({ message: error.message });

            res.status(200).json(req.session.user);
        });
    });
});

// User checkin
router.get('/user/checkin', async (req, res) => {
    if (req.session.user) {
        res.status(200).json(req.session.user);
    }
    else {
        res.status(400).json({ message: 'no session'});
    }
});

// User logout
router.get('/user/logout', async (req, res) => {
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