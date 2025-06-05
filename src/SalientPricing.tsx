const SalientPricing = () => (
    <section
        id="pricing"
        className="py-20 bg-transparent text-base-content dark:text-white"
    >
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary mb-10">
                Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="card shadow-xl border border-base-200 bg-base-100/20 backdrop-blur-md transition-transform duration-300 hover:scale-105">
                    <div className="card-body items-center text-center">
                        <h3 className="card-title text-primary mb-2">Basic</h3>
                        <div className="text-4xl font-bold text-primary mb-4">
                            Free
                        </div>
                        <ul className="mb-6 space-y-2 text-base-content">
                            <li>✔️ Access to core lessons</li>
                            <li>✔️ Daily practice</li>
                            <li>✔️ Community support</li>
                        </ul>
                        <button className="btn btn-outline btn-primary w-full">
                            Get Started
                        </button>
                    </div>
                </div>
                {/* Pro Plan */}
                <div className="card shadow-lg border-2 border-secondary bg-secondary text-secondary-content backdrop-blur-md transform scale-105 z-10 transition-transform duration-300 hover:scale-110">
                    <div className="card-body items-center text-center">
                        <h3 className="card-title text-xl font-bold mb-2">
                            Pro
                        </h3>
                        <div className="text-5xl font-extrabold mb-4">
                            €9
                            <span className="text-lg align-top opacity-80">
                                /mo
                            </span>
                        </div>
                        <ul className="mb-6 space-y-2 opacity-90">
                            <li>✔️ Everything in Basic</li>
                            <li>✔️ Advanced analytics</li>
                            <li>✔️ Real-time updates</li>
                            <li>✔️ Priority support</li>
                        </ul>
                        <button className="btn btn-secondary btn-wide font-semibold hover:bg-secondary-focus transition">
                            Start Free Trial
                        </button>
                    </div>
                </div>
                {/* Team Plan */}
                <div className="card shadow-xl border border-base-200 bg-base-100/20 backdrop-blur-md transition-transform duration-300 hover:scale-105">
                    <div className="card-body items-center text-center">
                        <h3 className="card-title text-primary mb-2">Team</h3>
                        <div className="text-4xl font-bold text-primary mb-4">
                            €29
                            <span className="text-lg align-top">/mo</span>
                        </div>
                        <ul className="mb-6 space-y-2 text-base-content">
                            <li>✔️ All Pro features</li>
                            <li>✔️ Team management</li>
                            <li>✔️ Progress tracking</li>
                            <li>✔️ Dedicated support</li>
                        </ul>
                        <button className="btn btn-outline btn-primary w-full">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SalientPricing;
