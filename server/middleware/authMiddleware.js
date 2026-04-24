import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    let token;

    // Check if the Authorization header exists and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get the token from the string ("Bearer <token>")
            token = req.headers.authorization.split(' ')[1];

            // Verify the token using your Secret Key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user and attach them to the request (excluding the password)
            req.user = await User.findById(decoded.id).select('-password');

            // Move to the next function (the Controller)
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed.' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token.' });
    }
};