import { useState } from 'react';

import LandingPageHeader from "../components/headers/LandingPageHeader";
import ContactUsPageHero from "../components/sections/ContactUsPageHero";
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import SignUpModal from '../components/modals/SignUpModal.jsx';
import LoginModal from '../components/modals/LoginModal.jsx';
import SubmissionSuccessModal from '../components/modals/SubmissionSuccessModal.jsx';

const ContactUsPage = () => {
    useDocumentTitle('Contact Us - SideQuest');

    const [modalMode, setModalMode] = useState(null);

    const handleLoginModal = () => {
        setModalMode('login');
    }

    const handleRegistrationModal = () => {
        setModalMode('register');
    }

    const handleSuccessModal = () => {
        setModalMode('success');
    }

    const handleCloseModal = () => {
        setModalMode(null);
    }

    return (
        <>
            <LandingPageHeader 
                onGetStarted={handleRegistrationModal}
                onLogin={handleLoginModal}
            />
            <main>
                <ContactUsPageHero
                    onSuccess={handleSuccessModal}
                />
            </main>

            <LoginModal 
                isOpen={modalMode === 'login'}
                onClose={handleCloseModal}
            />

            <SignUpModal 
                isOpen={modalMode === 'register'}
                onClose={handleCloseModal}
            />

            <SubmissionSuccessModal
                isOpen={modalMode === 'success'}
                onClick={handleCloseModal}
            />
        </>
    );
}

export default ContactUsPage;