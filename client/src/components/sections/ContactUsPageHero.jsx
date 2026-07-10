const ContactUsPageHero = () => {
    return (
        <>
            <section className="w-full flex justify-center items-stretch py-20 px-40 gap-8">
                <div className="w-full flex flex-col md:w-1/2 p-8">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold text-zinc-950 leading-tight">Get In Touch</h1>
                        <span className="text-lg font-medium text-amber-700">Let's Build Something Together</span>
                        <p className="text-sm leading-relaxed text-gray-600">
                            Whether you are looking to scale your engineering team, discuss full-stack code
                            architecture, or simply talk about modern JavaScript development workflows,
                            I would love to connect. I am available for full-time software engineering roles
                            and ready for immediate deployment.
                        </p>
                        <span className="text-sm text-gray-600">nikkoensomo.work@gmail.com</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8">

                </div>
            </section>
        </>
    );
}

export default ContactUsPageHero;