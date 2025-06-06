const CTA = () => (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 text-base-content dark:text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {" "}
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
                    Ready to start your free trial?
                </h2>
                <p className="mt-6 text-lg leading-8 text-base-content/70">
                    Join thousands of learners who are mastering new languages
                    with Lingano. Start your free trial now and unlock your
                    potential!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/register"
                        className="btn btn-primary btn-lg font-bold text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        🚀 Start Free Trial Now
                    </a>
                    <a
                        href="#pricing"
                        className="text-lg font-semibold leading-6 text-base-content hover:underline"
                    >
                        View pricing <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
        {/* <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl"
            aria-hidden="true"
        >
            <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-indigo-400 to-indigo-200 opacity-30"
                style={{
                    clipPath:
                        "polygon(74.8% 44.1%, 100% 61.6%, 97.2% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.8% 44.1%)",
                }}
            />
        </div> */}
    </section>
);

export default CTA;
