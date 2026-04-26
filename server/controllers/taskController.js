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
            return res.status(400).json({ message: 'Task was not created successfully.' });
        }

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
}

export const displayUserTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
}

export const updateUserTasks = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const updatedFields = {}

        if (title) updatedFields.title = title;

        if (description) updatedFields.description = description;

        if (status) updatedFields.status = status;

        const updatedTask = await Task.findByIdAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            { $set: updatedFields },
            { new: true }
        )

        if (!updatedTask) {
            return res.status(400).json({ message: 'Update was unsuccessful' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }   
}