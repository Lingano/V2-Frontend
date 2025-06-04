const features = [
    {
        name: "Interactive Lessons",
        description:
            "Engage with hands-on exercises and real-world scenarios to boost your language skills.",
        icon: (
            <svg
                className="h-8 w-8 text-indigo-600"
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
                className="h-8 w-8 text-indigo-600"
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
                className="h-8 w-8 text-indigo-600"
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
                className="h-8 w-8 text-indigo-600"
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
    <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-wider">
                    Features
                </h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Everything you need to succeed
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our platform is packed with features to help you learn
                    faster and stay motivated.
                </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                    <div
                        key={feature.name}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {feature.name}
                        </h3>
                        <p className="mt-2 text-base text-gray-600">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;
