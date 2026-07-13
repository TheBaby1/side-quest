import { useState } from 'react';

import LandingPageHeader from "../components/headers/LandingPageHeader";
import AboutUsPageHero from "../components/sections/AboutUsPageHero";
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import LoginModal from "../components/modals/LoginModal.jsx";
import SignUpModal from "../components/modals/SignUpModal.jsx";

const AboutUsPage = () => {
    useDocumentTitle('About Us - SideQuest');

    const [modalMode, setModalMode] = useState(null);

    const handleLoginModal = () => {
        setModalMode('login');
    }

    const handleRegistrationModal = () => {
        setModalMode('register');
    }

    const handleModalClose = () => {
        setModalMode(null);
    }

    return(
        <>
            <LandingPageHeader
                onGetStarted={handleRegistrationModal}
                onLogin={handleLoginModal}
            />
            <main>
                <AboutUsPageHero/>
            </main>

            <LoginModal 
                isOpen={modalMode === 'login'}
                onClose={handleModalClose}
            />

            <SignUpModal 
                isOpen={modalMode === 'register'}
                onClose={handleModalClose}
            />
        </>
    );
}

export default AboutUsPage;