import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})

        if (users.length === 0) {
            return res.status(400).json({ message: 'Users do not exist.' });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
}

export const getUserByUsername = async (req, res) => {
    try {
        const [ username ] = req.body;

        const searchedUser = await User.findOne({ username: `${username}`})
        if (!searchedUser) {
            return res.status(400).json({ message: 'User does not exist.' });
        }

        res.status(200).json(searchedUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
}