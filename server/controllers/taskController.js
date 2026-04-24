import Task from '../models/Task.js';
import User from '../models/User.js';

export const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body; 

        const newTask = await Task.create({
            userId: req.user.id,
            title: title,
            description: description,
            status: status
        });

        if (!newTask) {
            res.status(400).json({ message: 'Task was not created successfully.' });
        }

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
}

export const displayUserTasks = async (req, res) => {
    try {
        const existingUser = await User.findOne({ _id: req.user.id });
        if (!existingUser) {
            res.status(400).json({ message: 'User does not exist.' });
        }

        const tasks = await Task.find({ userId: req.user.id });

        res.satus(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
}