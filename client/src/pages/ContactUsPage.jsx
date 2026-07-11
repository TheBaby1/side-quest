import LandingPageHeader from "../components/headers/LandingPageHeader";
import ContactUsPageHero from "../components/sections/ContactUsPageHero";
import useDocumentTitle from '../hooks/useDocumentTitle.js';

import ContactUsForm from "../components/forms/ContactUsForm.jsx";

const ContactUsPage = () => {
    useDocumentTitle('Contact Us - SideQuest');

    return (
        <>
            <LandingPageHeader/>
            <main>
                <ContactUsPageHero/>
            </main>
        </>
    );
}

export default ContactUsPage;