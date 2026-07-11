import { useState } from 'react';

import LandingPageHeader from "../components/headers/LandingPageHeader";
import ContactUsPageHero from "../components/sections/ContactUsPageHero";
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import SignUpModal from '../components/modals/SignUpModal.jsx';
import LoginModal from '../components/modals/LoginModal.jsx';

const ContactUsPage = () => {
    useDocumentTitle('Contact Us - SideQuest');

    const [modalMode, setModalMode] = useState(null);

    const handleLoginModal = () => {
        setModalMode('login');
    }

    const handleRegistrationModal = () => {
        setModalMode('register');
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
                <ContactUsPageHero/>
            </main>

            <LoginModal 
                isOpen={modalMode === 'login'}
                onClose={handleCloseModal}
            />

            <SignUpModal 
                isOpen={modalMode === 'register'}
                onClose={handleCloseModal}
            />
        </>
    );
}

export default ContactUsPage;