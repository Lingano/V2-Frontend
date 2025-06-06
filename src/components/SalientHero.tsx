const Hero = () => (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-transparent text-base-content">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-7xl transition-colors duration-300">
                    A better way to learn languages
                </h1>
                <p className="mt-6 text-lg leading-8 text-base-content/70 transition-colors duration-300">
                    Lingano helps you master new languages with interactive
                    lessons, real-time feedback, and a vibrant community. Start
                    your journey today.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="https://lingano.live/register"
                        className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-base-100 shadow-sm hover:bg-primary-focus transition"
                    >
                        Get started
                    </a>
                    <a
                        href="#features"
                        className="text-lg font-semibold leading-6 text-primary hover:underline"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
