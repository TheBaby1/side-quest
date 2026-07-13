import api from '../api/axios.js';

export const sendContactMessageService = async (formData) => {
    const response = await api.post('/contact', formData);
    return response.data;
}