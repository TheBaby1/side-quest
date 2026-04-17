import { useRef, useEffect } from 'react'

import LoginForm from '../forms/LoginForm';
import OtherOptionButton from '../buttons/sign-up-buttons/OtherOptionButton';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [onClose]);

    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                    <div className="flex flex-col justify-center items-center mb-4">
                        <h2 className="text-black text-2xl font-semibold mb-4">Welcome back!</h2>
                        <p className="text-gray-400 text-sm text-center px-6">
                            Come back in and go right where you left!
                        </p>
                    </div>

                    <LoginForm
                        onSuccess={onClose}
                    />

                    <p className="text-gray-400 text-sm text-center px-6 mt-4">
                        Or continue with
                    </p>

                    <div className="flex justify-center items-center gap-1 mt-4">
                        <OtherOptionButton
                            label="Facebook"
                            onClick="" // TODO
                        />
                        <OtherOptionButton
                            label="Google"
                            onClick="" // TODO
                        />
                        <OtherOptionButton
                            label="Apple"
                            onClick="" // TODO
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginModal;