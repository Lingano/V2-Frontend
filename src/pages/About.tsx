import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface AboutProps {
    darkMode?: boolean;
    setDarkMode?: (darkMode: boolean) => void;
}

const About = ({ darkMode = false, setDarkMode = () => {} }: AboutProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teamMembers = [
        {
            name: "Alex Johnson",
            role: t("about.team.ceo.role"),
            description: t("about.team.ceo.description"),
            image: "https://picsum.photos/300/300?random=1",
        },
        {
            name: "Sarah Chen",
            role: t("about.team.cto.role"),
            description: t("about.team.cto.description"),
            image: "https://picsum.photos/300/300?random=2",
        },
        {
            name: "Dr. Maria Rodriguez",
            role: t("about.team.head_linguist.role"),
            description: t("about.team.head_linguist.description"),
            image: "https://picsum.photos/300/300?random=3",
        },
    ];

    const values = [
        {
            title: t("about.values.innovation.title"),
            description: t("about.values.innovation.description"),
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ),
        },
        {
            title: t("about.values.accessibility.title"),
            description: t("about.values.accessibility.description"),
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                </svg>
            ),
        },
        {
            title: t("about.values.excellence.title"),
            description: t("about.values.excellence.description"),
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                                {t("about.hero.title")}
                            </h1>
                            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed">
                                {t("about.hero.subtitle")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 bg-base-100/50">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                    {t("about.mission.title")}
                                </h2>
                                <p className="text-lg text-base-content/70 leading-relaxed">
                                    {t("about.mission.description")}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold text-primary mb-4">
                                        {t("about.story.title")}
                                    </h3>
                                    <p className="text-base-content/70 leading-relaxed mb-6">
                                        {t("about.story.paragraph1")}
                                    </p>
                                    <p className="text-base-content/70 leading-relaxed">
                                        {t("about.story.paragraph2")}
                                    </p>
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://picsum.photos/600/400?random=10"
                                        alt="About Lingano"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                {t("about.values.title")}
                            </h2>
                            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                                {t("about.values.subtitle")}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="group bg-base-100/50 p-8 rounded-xl border border-base-300/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-base-content/70 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-base-100/50">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                {t("about.team.title")}
                            </h2>
                            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                                {t("about.team.subtitle")}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group bg-base-100 p-8 rounded-xl border border-base-300/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 text-center"
                                >
                                    <div className="mb-6">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-secondary font-medium mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-base-content/70 leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        10K+
                                    </div>
                                    <div className="text-base-content/70">
                                        {t("about.stats.users")}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        25+
                                    </div>
                                    <div className="text-base-content/70">
                                        {t("about.stats.languages")}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        95%
                                    </div>
                                    <div className="text-base-content/70">
                                        {t("about.stats.satisfaction")}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        24/7
                                    </div>
                                    <div className="text-base-content/70">
                                        {t("about.stats.support")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
