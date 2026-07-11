import { useState } from 'react';

import BigBlackButton from '../buttons/BigBlackButton';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        concern: '',
    });

    const [error, setError] = useState({
        general: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        setError({ general: '' });
    }

    return (
        <>
            <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                    />

                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-zinc-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-950"
                    />
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
                </div>

                <div>
                    <input
                        type="number"
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
                </div>

                <BigBlackButton
                    label="Submit"
                    onClick=""
                    isDisabled={isLoading}
                />
            </div>
        </>
    );
}

export default ContactUsForm;