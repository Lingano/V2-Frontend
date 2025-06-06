import { useTranslation } from "react-i18next";

function CTA() {
    const { t } = useTranslation();

    return (
        <section className="relative isolate overflow-hidden py-24 sm:py-32 text-base-content dark:text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
                        {t("cta.title")}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-base-content/70">
                        {t("cta.subtitle")}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/register"
                            className="btn btn-primary btn-lg font-bold text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            {t("cta.startTrial")}
                        </a>
                        <a
                            href="#pricing"
                            className="text-lg font-semibold leading-6 text-base-content hover:underline"
                        >
                            {t("cta.viewPricing")}{" "}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
