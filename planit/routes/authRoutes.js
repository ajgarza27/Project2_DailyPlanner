const express = require('express');
const router = express.Router();
const passport = require('passport');
const { User } = require('../models');

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Logged in successfully' });
});

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    req.logout();
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;
