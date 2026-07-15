import ContactUsForm from "../forms/ContactUsForm";

const ContactUsPageHero = ({ onSuccess }) => {
    return (
        <>
            <section className="w-full flex justify-center items-stretch py-20 px-20 gap-8">
                <div className="w-full flex flex-col md:w-[60%] p-8">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold text-zinc-950 leading-tight mb-4">Get In Touch</h1>
                        <span className="block text-lg font-medium text-amber-700">Let's Build Something Together</span>
                        <p className="text-sm leading-relaxed text-gray-600 mb-4">
                            Whether you are looking to scale your engineering team, discuss full-stack code
                            architecture, or simply talk about modern JavaScript development workflows,
                            I would love to connect. I am available for full-time software engineering roles
                            and ready for immediate deployment.
                        </p>
                    </div>

                    <div className="flex self-stretch gap-4 mt-8">
                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-zinc-950">Opportunities & Hiring</h3>
                            <p className="text-sm leading-relaxed text-gray-600 mt-2">
                                Looking to expand your engineering team? I am actively seeking full-time roles 
                                and am ready for immediate deployment. Let's discuss how my full-stack background 
                                can add value to your current production sprints.
                            </p>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-zinc-950">Code & Collaboration</h3>
                            <p className="text-sm leading-relaxed text-gray-600 mt-2">
                                Have questions about SideQuest's data flow, component architecture, or state management? 
                                Feel free to open an issue on GitHub or reach out to discuss clean engineering practices.
                            </p>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-zinc-950">Direct Channels</h3>
                            <p className="text-sm leading-relaxed text-gray-600 mt-2">
                                For all other inquiries, casual networking, or technical consultations, you can reach me 
                                directly. I actively monitor my inbox and typically respond within 24 business hours.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[40%] border border-gray-100 rounded-lg shadow-sm p-8">
                    <h3 className="text-2xl font-medium text-zinc-950 leading-tight mb-2">Contact Us</h3>
                    <span className="block text-sm text-gray-600 mb-4">You can reach us anytime</span>
                    <ContactUsForm 
                        onSuccess={onSuccess}
                    />
                </div>
            </section>
        </>
    );
}

export default ContactUsPageHero;