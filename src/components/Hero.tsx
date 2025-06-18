import { useTranslation } from "react-i18next";
import GlobeSwitcher from "./GlobeSwitcher";

interface HeroProps {
    darkMode?: boolean; // Keep prop for backward compatibility
}

const Hero: React.FC<HeroProps> = () => {
    const { t } = useTranslation();
    return (
        <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-transparent text-base-content min-h-screen flex items-center">
            {/* Globe Background */}
            <GlobeSwitcher />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-7xl transition-colors duration-300 drop-shadow-lg">
                        {t("hero.title")}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-base-content/90 transition-colors duration-300 drop-shadow-md">
                        {t("hero.subtitle")}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/register"
                            className="btn btn-primary btn-lg font-bold text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                        >
                            🚀 {t("hero.getStarted")}
                        </a>
                        <a
                            href="#features"
                            className="text-lg font-semibold leading-6 text-primary hover:underline backdrop-blur-sm bg-base-100/10 px-4 py-2 rounded-lg hover:bg-base-100/20 transition-all duration-300"
                        >
                            {t("hero.learnMore")}{" "}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
