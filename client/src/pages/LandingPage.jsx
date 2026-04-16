import { useState } from 'react'

import LandingPageHeader from "../components/headers/LandingPageHeader";
import LandingPageHero from "../components/sections/LandingPageHero";
import SignUpModal from "../components/modals/SignUpModal";
import LoginModal from '../components/modals/LoginModal';

const LandingPage = () => {

    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    function handleRegistration() {
        setIsRegistrationModalOpen(true);
        console.log("hello sign");
    }

    function handleLogin() {
        setIsLoginModalOpen(true);
        console.log("hello");
    }

    return(
        <>
            <LandingPageHeader
                onGetStarted={handleRegistration}
                onLogin={handleLogin}
            />
            <main>
                <LandingPageHero/>
            </main>

            <SignUpModal
                isOpen={isRegistrationModalOpen}
                onClose={() => setIsRegistrationModalOpen(false)}
            />
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />

        </>
    );
} 

export default LandingPage;