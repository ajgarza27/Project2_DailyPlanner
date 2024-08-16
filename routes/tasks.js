const express = require('express');
const router = express.Router();
const { Task } = require('../models');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Create a new task
router.post('/', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            await task.update(req.body);
            res.json(task);
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            await task.destroy();
            res.send('Task deleted');
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
