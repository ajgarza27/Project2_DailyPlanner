const { Task } = require('../models');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
};
