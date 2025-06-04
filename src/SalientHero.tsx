const Hero = () => (
    <section className="relative overflow-hidden bg-white py-32 sm:py-48 lg:py-56">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                    A better way to learn languages
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lingano helps you master new languages with interactive
                    lessons, real-time feedback, and a vibrant community. Start
                    your journey today.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
                    >
                        Get started
                    </a>
                    <a
                        href="#features"
                        className="text-lg font-semibold leading-6 text-indigo-600 hover:underline"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
        <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl"
            aria-hidden="true"
        >
            <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-indigo-200 to-indigo-100 opacity-30"
                style={{
                    clipPath:
                        "polygon(74.8% 44.1%, 100% 61.6%, 97.2% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.8% 44.1%)",
                }}
            />
        </div>
    </section>
);

export default Hero;
