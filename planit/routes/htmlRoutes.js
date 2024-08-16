const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// Other routes to render pages
router.get('/tasks', (req, res) => {
    res.render('tasks', { title: 'Tasks' });
});

module.exports = router;
