import { useState } from 'react';
import { sendContactMessageService } from '../../services/contactService';
import { LoaderCircle } from 'lucide-react';

import BigBlackButton from '../buttons/BigBlackButton';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    concern: '',
}

const ContactUsForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        concern: '',
        general: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '', general: '' });
    }

    const validate = () => {
        const newErrors = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = "Please enter your first name."
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Please enter your last name."
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email."
        }

        if (!formData.concern.trim()) {
            newErrors.concern = "Please enter your concern."
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            const payload = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: formData.email.trim(),
                phoneNumber: formData.phoneNumber.trim(),
                concern: formData.concern.trim(),
            }

            const sentEmail = await sendContactMessageService(payload);
            console.log(sentEmail);
            setFormData(initialFormData);
            onSuccess();
        } catch (error) {
            setErrors({
                ...errors,
                general: error.response?.data?.message || 'Failed to send message.'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                        />

                        {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                        />

                        {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                    />

                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                    />
                </div>

                <div>
                    <textarea
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        rows="3"
                        className="mt-1 w-full resize-none rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                    />

                    {errors.concern && <p className="mt-1 text-xs text-red-500">{errors.concern}</p>}
                </div>

                <BigBlackButton
                    label={isLoading ? (
                        <>
                            Submitting...
                            <LoaderCircle className="animate-spin" size={20} />
                        </>
                    ) : (
                        "Submit"
                    )
                    }
                    onClick={handleSubmit}
                    isDisabled={isLoading}
                />
            </div>
        </>
    );
}

export default ContactUsForm;