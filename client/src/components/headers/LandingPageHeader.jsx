import LoginButton from "../buttons/LoginButton";
import GetStartedButton from "../buttons/GetStartedButton";

const LandingPageHeader = () => {
    return(
        <>
            <header className="w-full bg-white px-6 py-4 flex flex-row justify-between items-center">
                <span className="text-black text-2xl font-bold">SideQuest</span>
                <nav className="flex gap-6">
                    <a href="#" className="text-black hover:text-gray-300">Home</a>
                    <a href="#" className="text-black hover:text-gray-300">About Us</a>
                    <a href="#" className="text-black hover:text-gray-300">Contact Us</a>
                </nav>
                <div className="flex gap-4">
                    <LoginButton/>
                    <GetStartedButton/>
                </div>

            </header>
        </>
    );
}

export default LandingPageHeader;