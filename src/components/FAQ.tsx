const FAQ = () => (
    <section
        id="faq"
        className="py-20 bg-transparent text-base-content dark:text-white"
    >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary mb-10">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title text-lg font-semibold text-primary">
                        What is Lingano?
                    </div>
                    <div className="collapse-content text-base-content">
                        Lingano is a modern platform designed to make language
                        learning fast, fun, and effective, with real-time
                        updates and advanced analytics.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-semibold text-primary">
                        Is there a free plan?
                    </div>
                    <div className="collapse-content text-base-content">
                        Yes! Our Basic plan is free and gives you access to core
                        lessons and daily practice.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-semibold text-primary">
                        Can I upgrade or cancel anytime?
                    </div>
                    <div className="collapse-content text-base-content">
                        Absolutely! You can upgrade, downgrade, or cancel your
                        subscription at any time from your account settings.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100/20 border border-base-200 backdrop-blur-md shadow-md">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-semibold text-primary">
                        Do you offer team plans?
                    </div>
                    <div className="collapse-content text-base-content">
                        Yes, our Team plan is perfect for organizations and
                        includes team management and dedicated support.
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FAQ;
