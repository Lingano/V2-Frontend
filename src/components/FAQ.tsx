import { useTranslation } from "react-i18next";

function FAQ() {
    const { t } = useTranslation();

    return (
        <section
            id="faq"
            className="py-20 bg-transparent text-base-content dark:text-white"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-primary mb-10">
                    {t("faq.title")}
                </h2>
                <div className="space-y-4">
                    <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                        <input
                            type="radio"
                            name="faq-accordion"
                            defaultChecked
                        />
                        <div className="collapse-title text-lg font-semibold text-primary">
                            {t("faq.whatIsLingano.question")}
                        </div>
                        <div className="collapse-content text-base-content">
                            {t("faq.whatIsLingano.answer")}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold text-primary">
                            {t("faq.freePlan.question")}
                        </div>
                        <div className="collapse-content text-base-content">
                            {t("faq.freePlan.answer")}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold text-primary">
                            {t("faq.upgradeCancel.question")}
                        </div>
                        <div className="collapse-content text-base-content">
                            {t("faq.upgradeCancel.answer")}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold text-primary">
                            {t("faq.teamPlans.question")}
                        </div>
                        <div className="collapse-content text-base-content">
                            {t("faq.teamPlans.answer")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
