import { useTranslation } from "react-i18next";

const Pricing = () => {
    const { t } = useTranslation();

    return (
        <section
            id="pricing"
            className="py-20 bg-transparent text-base-content dark:text-white"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-primary mb-10">
                    {t("pricing.title")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <div className="card shadow-xl border border-base-200 bg-base-100/20 backdrop-blur-md transition-transform duration-300 hover:scale-105">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-primary mb-2">
                                {t("pricing.starter.name")}
                            </h3>
                            <div className="text-4xl font-bold text-primary mb-4">
                                {t("pricing.starter.price")}
                                <span className="text-lg align-top">
                                    {t("pricing.starter.period")}
                                </span>
                            </div>
                            <p className="text-sm text-base-content/70 mb-4">
                                {t("pricing.starter.description")}
                            </p>
                            <ul className="mb-6 space-y-2 text-base-content">
                                {t("pricing.starter.features", {
                                    returnObjects: true,
                                }).map((feature: string, index: number) => (
                                    <li key={index}>✔️ {feature}</li>
                                ))}
                            </ul>
                            <button className="btn btn-outline btn-primary w-full">
                                {t("pricing.starter.button")}
                            </button>
                        </div>
                    </div>
                    {/* Professional Plan */}
                    <div className="card shadow-xl border border-primary bg-primary text-primary-content backdrop-blur-md transform scale-105 z-10 transition-transform duration-300 hover:scale-110">
                        <div className="badge badge-secondary absolute -top-2 left-1/2 transform -translate-x-1/2">
                            {t("pricing.professional.popular")}
                        </div>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-xl font-bold mb-2">
                                {t("pricing.professional.name")}
                            </h3>
                            <div className="text-5xl font-extrabold text-primary-content mb-4">
                                {t("pricing.professional.price")}
                                <span className="text-lg align-top opacity-80">
                                    {t("pricing.professional.period")}
                                </span>
                            </div>
                            <p className="text-sm text-primary-content/80 mb-4">
                                {t("pricing.professional.description")}
                            </p>
                            <ul className="mb-6 space-y-2 text-primary-content opacity-90">
                                {t("pricing.professional.features", {
                                    returnObjects: true,
                                }).map((feature: string, index: number) => (
                                    <li key={index}>✔️ {feature}</li>
                                ))}
                            </ul>
                            <button className="btn btn-lg btn-wide font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse bg-white text-primary ring-2 ring-gray-300 ring-inset hover:bg-accent hover:text-white hover:ring-white">
                                🚀 {t("pricing.professional.button")}
                            </button>
                        </div>
                    </div>
                    {/* Enterprise Plan */}
                    <div className="card shadow-xl border border-base-200 bg-base-100/20 backdrop-blur-md transition-transform duration-300 hover:scale-105">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-primary mb-2">
                                {t("pricing.enterprise.name")}
                            </h3>
                            <div className="text-4xl font-bold text-primary mb-4">
                                {t("pricing.enterprise.price")}
                                <span className="text-lg align-top">
                                    {t("pricing.enterprise.period")}
                                </span>
                            </div>
                            <p className="text-sm text-base-content/70 mb-4">
                                {t("pricing.enterprise.description")}
                            </p>
                            <ul className="mb-6 space-y-2 text-base-content">
                                {t("pricing.enterprise.features", {
                                    returnObjects: true,
                                }).map((feature: string, index: number) => (
                                    <li key={index}>✔️ {feature}</li>
                                ))}
                            </ul>
                            <button className="btn btn-outline btn-primary w-full">
                                {t("pricing.enterprise.button")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
