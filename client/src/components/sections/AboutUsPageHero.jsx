const AboutUsPageHero = () => {
    return (
        <>
            <section className="w-full flex justify-center items-stretch py-20 px-40 gap-8">
                <div className="w-full md:w-1/2 border border-gray-300 rounded-lg shadow-sm p-8">
                    <span className="text-lg font-medium text-amber-700">How It Started</span>
                    <h1 className="text-3xl font-bold leading-tight text-zinc-950 mt-2 mb-6">Our Goal Is Turning Growth Into An Adeventure</h1>
                    <p className="text-base leading-relaxed text-gray-600">
                        SideQuest was founded by Nikko Ensomo, a disciplined IT graduate and DOST-SEI Scholar who
                        believes software engineering is a balance of rigid analytical problem-solving and intentional
                        design. Driven by the goal to eliminate personal productivity stagnation, SideQuest was engineered
                        from the ground up as a fully responsive, full-stack platform. Built completely line-by-line
                        without relying on automated code generators, the platform provides modern builders and learners
                        with a streamlined architecture to manage side projects and track personal development milestones
                        as an intentional, continuous adventure.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex flex-col self-stretch gap-4">
                    <div className="w-full flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <span className="text-sm font-semibold text-amber-700">01</span>

                        <h3 className="mt-2 text-lg font-semibold text-zinc-950">
                            Intentional Architecture
                        </h3>

                        <p className="mt-3 text-base leading-6 text-gray-600">
                            Prioritizing clean, predictable data flow and strict component modularity. By writing
                            every layer manually instead of leaning on automated templates, the codebase maintains
                            high readability, seamless state changes, and a robust structural foundation.
                        </p>
                    </div>

                    <div className="w-full flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <span className="text-sm font-semibold text-amber-700">02</span>

                        <h3 className="mt-2 text-lg font-semibold text-zinc-950">
                            Production-Ready Standards
                        </h3>

                        <p className="mt-3 text-base leading-6 text-gray-600">
                            Built with an engineering mindset that values standard industry workflows. This includes
                            practicing disciplined version control hygiene, maintaining layout accuracy across
                            viewports, and aligning architecture with modern full-stack development lifecycles.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUsPageHero;