const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { protect } = require('../middleware/authMiddleware');

// All routes below require authentication
router.use(protect);

// @route   GET /api/tasks
// @desc    Get all tasks for logged-in user
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/tasks
// @desc    Create a new task
router.post('/', async (req, res) => {
  const { title, description, dueDate, priority, category } = req.body;

  try {
    const task = await Task.create({
      userId: req.user._id,
      title,
      description,
      dueDate,
      priority,
      category
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   PUT /api/tasks/:id
// @desc    Update a task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const { title, description, dueDate, priority, category, isCompleted } = req.body;

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.dueDate = dueDate ?? task.dueDate;
    task.priority = priority ?? task.priority;
    task.category = category ?? task.category;
    task.isCompleted = isCompleted ?? task.isCompleted;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
