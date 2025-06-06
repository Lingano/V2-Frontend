import { useTranslation } from "react-i18next";

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            name: t("features.aiPowered.title"),
            description: t("features.aiPowered.description"),
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
            name: t("features.realTime.title"),
            description: t("features.realTime.description"),
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
            name: t("features.secure.title"),
            description: t("features.secure.description"),
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
            name: t("features.scalable.title"),
            description: t("features.scalable.description"),
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
        {
            name: t("features.integration.title"),
            description: t("features.integration.description"),
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
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                </svg>
            ),
        },
        {
            name: t("features.support.title"),
            description: t("features.support.description"),
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
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative isolate overflow-hidden py-20 bg-transparent text-base-content dark:text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        {t("features.title")}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-base-content/70">
                        {t("features.subtitle")}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
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
};

export default Features;
