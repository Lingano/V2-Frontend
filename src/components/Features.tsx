const features = [
    {
        name: "Interactive Lessons",
        description:
            "Engage with hands-on exercises and real-world scenarios to boost your language skills.",
        icon: (
            <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l4 2"
                />
            </svg>
        ),
    },
    {
        name: "Real-time Feedback",
        description:
            "Get instant corrections and suggestions to improve your pronunciation and grammar.",
        icon: (
            <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                />
            </svg>
        ),
    },
    {
        name: "Community Support",
        description:
            "Join a vibrant community of learners and native speakers for motivation and help.",
        icon: (
            <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 10-8 0 4 4 0 008 0z"
                />
            </svg>
        ),
    },
    {
        name: "Progress Tracking",
        description:
            "Monitor your achievements and milestones with detailed analytics and reports.",
        icon: (
            <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3v18h18"
                />
            </svg>
        ),
    },
];

const Features = () => (
    <section className="relative isolate overflow-hidden py-20 bg-transparent text-base-content dark:text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Everything you need to succeed
                </h2>
                <p className="mt-6 text-lg leading-8 text-base-content/70">
                    Our platform is packed with features to help you learn
                    faster and stay motivated.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col items-center text-center"
                        >
                            <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-primary">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    {feature.icon}
                                </div>
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                                <h3 className="flex-auto font-semibold text-primary">
                                    {feature.name}
                                </h3>
                                <p className="text-base-content/70">
                                    {feature.description}
                                </p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    </section>
);

export default Features;
