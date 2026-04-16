import { useState } from 'react'

import BigBlackButton from '../buttons/BigBlackButton';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
       username: "",
       email: "",
       password: "",
       confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value });
        setErrors({...errors, [e.target.name]: ""});
    }

    function validate() {
        const newErrors = {}

        if (!formData.username.trim()) {
            newErrors.username = "Username is required."
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required."
        } else if (formData.password.length < 8) {
            newErrors.password = "Password should be at least 8 characters"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password."
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwrods do not match."
        }

        return newErrors;
    }

    function handleSubmit() {
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; 
        }

        console.log(formData);
    }

    return (
        <>
            <div className="flex flex-col gap-4 px-6">
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black mb-4"
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}

                <BigBlackButton
                    label="Create My Account"
                    onClick={handleSubmit}
                />
            </div>
        </>
    );
}

export default SignUpForm;