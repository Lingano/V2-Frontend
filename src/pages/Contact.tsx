import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
    IoMailOutline,
    IoCallOutline,
    IoLocationOutline,
    IoTimeOutline,
    IoSendOutline,
    IoCheckmarkCircleOutline,
    IoHeartOutline,
    IoChatbubbleOutline,
} from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ContactProps {
    darkMode?: boolean;
    setDarkMode?: (darkMode: boolean) => void;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = ({
    darkMode = false,
    setDarkMode = () => {},
}: ContactProps) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send form data to Go backend
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                }, 3000);
            } else {
                console.error("Failed to send message");
                // Handle error - you might want to show an error message
            }
        } catch (error) {
            console.error("Error sending message:", error);
            // Handle network error
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <IoMailOutline className="w-6 h-6 text-primary" />,
            title: t("contact.email.title"),
            value: "hello@lingano.com",
            link: "mailto:hello@lingano.com",
            description: t("contact.email.description"),
        },
        {
            icon: <IoCallOutline className="w-6 h-6 text-primary" />,
            title: t("contact.phone.title"),
            value: "+41 22 123 4567",
            link: "tel:+41221234567",
            description: t("contact.phone.description"),
        },
        {
            icon: <IoLocationOutline className="w-6 h-6 text-primary" />,
            title: t("contact.address.title"),
            value: "Geneva, Switzerland",
            link: "https://maps.google.com/?q=Geneva,Switzerland",
            description: t("contact.address.description"),
        },
        {
            icon: <IoTimeOutline className="w-6 h-6 text-primary" />,
            title: t("contact.hours.title"),
            value: "9:00 - 18:00 CET",
            link: null,
            description: t("contact.hours.description"),
        },
    ];

    const faqs = [
        {
            question: t("contact.faq.pricing.question"),
            answer: t("contact.faq.pricing.answer"),
        },
        {
            question: t("contact.faq.languages.question"),
            answer: t("contact.faq.languages.answer"),
        },
        {
            question: t("contact.faq.support.question"),
            answer: t("contact.faq.support.answer"),
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Hero Section */}
            <section className="pt-20 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <IoChatbubbleOutline className="w-12 h-12 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-base-content mb-6">
                        {t("contact.hero.title")}
                    </h1>
                    <p className="text-xl text-base-content/70 max-w-3xl mx-auto mb-8">
                        {t("contact.hero.subtitle")}
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-base-100 rounded-lg p-6 border border-base-300/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {info.icon}
                                    <h3 className="font-semibold text-base-content">
                                        {info.title}
                                    </h3>
                                </div>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="text-lg font-medium text-primary hover:text-primary-focus transition-colors"
                                        target={
                                            info.link.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            info.link.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-lg font-medium text-base-content">
                                        {info.value}
                                    </p>
                                )}
                                <p className="text-sm text-base-content/70 mt-2">
                                    {info.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & FAQ */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bold text-base-content mb-6">
                            {t("contact.form.title")}
                        </h2>
                        <p className="text-base-content/70 mb-8">
                            {t("contact.form.subtitle")}
                        </p>

                        {isSubmitted ? (
                            <div className="bg-success/10 border border-success/30 rounded-lg p-6 text-center">
                                <IoCheckmarkCircleOutline className="w-12 h-12 text-success mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-success mb-2">
                                    {t("contact.form.success.title")}
                                </h3>
                                <p className="text-success/80">
                                    {t("contact.form.success.message")}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-base-content mb-2"
                                        >
                                            {t("contact.form.name")}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="input input-bordered w-full"
                                            placeholder={t(
                                                "contact.form.namePlaceholder"
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-base-content mb-2"
                                        >
                                            {t("contact.form.email")}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="input input-bordered w-full"
                                            placeholder={t(
                                                "contact.form.emailPlaceholder"
                                            )}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-base-content mb-2"
                                    >
                                        {t("contact.form.subject")}
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">
                                            {t(
                                                "contact.form.subjectPlaceholder"
                                            )}
                                        </option>
                                        <option value="general">
                                            {t("contact.form.subjects.general")}
                                        </option>
                                        <option value="support">
                                            {t("contact.form.subjects.support")}
                                        </option>
                                        <option value="business">
                                            {t(
                                                "contact.form.subjects.business"
                                            )}
                                        </option>
                                        <option value="press">
                                            {t("contact.form.subjects.press")}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-base-content mb-2"
                                    >
                                        {t("contact.form.message")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="textarea textarea-bordered w-full"
                                        placeholder={t(
                                            "contact.form.messagePlaceholder"
                                        )}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            {t("contact.form.sending")}
                                        </>
                                    ) : (
                                        <>
                                            <IoSendOutline className="w-5 h-5" />
                                            {t("contact.form.send")}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-base-content mb-6">
                            {t("contact.faq.title")}
                        </h2>
                        <p className="text-base-content/70 mb-8">
                            {t("contact.faq.subtitle")}
                        </p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="collapse collapse-plus bg-base-100 border border-base-300/50"
                                >
                                    <input type="radio" name="contact-faq" />
                                    <div className="collapse-title text-lg font-medium">
                                        {faq.question}
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-base-content/70">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Resources */}
                        <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                            <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                                <IoHeartOutline className="w-5 h-5 text-primary" />
                                {t("contact.resources.title")}
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="/about"
                                    className="block text-primary hover:text-primary-focus transition-colors"
                                >
                                    → {t("contact.resources.about")}
                                </a>
                                <a
                                    href="/careers"
                                    className="block text-primary hover:text-primary-focus transition-colors"
                                >
                                    → {t("contact.resources.careers")}
                                </a>
                                <a
                                    href="#"
                                    className="block text-primary hover:text-primary-focus transition-colors"
                                >
                                    → {t("contact.resources.help")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>{" "}
            </section>

            {/* Map Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-base-100 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-6 text-base-content text-center">
                            {t("contact.map.title")}
                        </h2>
                        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                            {/* Google Maps Embed - Replace with your actual location coordinates */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13601.121387724934!2d8.994636670574344!3d46.02930956385664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47843194769b47cb%3A0xd8ae0f5d70bda38d!2sMonte%20Boglia!5e1!3m2!1sit!2sch!4v1749407135110!5m2!1sit!2sch"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lingano Office Location"
                            ></iframe>
                            {/* <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11065.274618566389!2d6.1432!3d46.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357d0b3d24!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1699999999999!5m2!1sen!2sch"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lingano Office Location"
                            ></iframe> */}

                            {/* Alternative: OpenStreetMap embed (uncomment if you prefer this over Google Maps) */}

                            {/* <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=6.1232%2C46.1944%2C6.1632%2C46.2144&layer=mapnik&marker=46.2044%2C6.1432"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                title="Lingano Office Location"
                            ></iframe> */}
                        </div>
                        <p className="text-sm text-base-content/70 mt-4 text-center">
                            {t("contact.map.description")}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
