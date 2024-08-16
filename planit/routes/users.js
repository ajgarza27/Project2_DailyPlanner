const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const passport = require('passport'); // For authentication

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            username: req.body.username,
            password: hashedPassword
        });
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Login user
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('Logged in');
});

// Logout user
router.get('/logout', (req, res) => {
    req.logout();
    res.send('Logged out');
});

module.exports = router;
