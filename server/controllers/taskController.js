import Task from '../models/Task.js';

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

        res.status(200).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
}