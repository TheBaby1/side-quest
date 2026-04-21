export const healthCheck = async (req, res) => {
    try {
        res.status(200).json({ message: 'Server is healthy.' });
    } catch (error) {
        res.status(500).json({ message: 'Server unhealthy.', error: error.message });
    }
}