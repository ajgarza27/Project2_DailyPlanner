const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');

// User routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

// Task routes
router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);

module.exports = router;
