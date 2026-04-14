import { useState } from 'react'

import LandingPageHeader from "../components/headers/LandingPageHeader";
import LandingPageHero from "../components/sections/LandingPageHero";
import SignUpModal from "../components/modals/SignUpModal";

const LandingPage = () => {

    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    function handleRegistrationOpen() {
        setIsRegistrationModalOpen(true);
    }

    return(
        <>
            <LandingPageHeader
                onGetStarted={handleRegistrationOpen}
            />
            <main>
                <LandingPageHero/>
            </main>
            <SignUpModal
                isOpen={isRegistrationModalOpen}
                onClose={() => setIsRegistrationModalOpen(false)}
            />
        </>
    );
} 

export default LandingPage;