import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Swiss Flag SVG Component
const SwissFlag = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
    >
        <rect width="16" height="16" fill="#FF0000" rx="1" />
        <rect x="3" y="6.5" width="10" height="3" fill="white" />
        <rect x="6.5" y="3" width="3" height="10" fill="white" />
    </svg>
);

function Footer() {
    const { t } = useTranslation();

    const navigation = [
        {
            title: t("footer.company"),
            links: [
                { name: t("footer.about"), href: "/about" },
                { name: t("footer.careers"), href: "/careers" },
                { name: t("footer.blog"), href: "#" },
                { name: t("footer.press"), href: "#" },
            ],
        },
        {
            title: t("footer.resources"),
            links: [
                { name: t("footer.languageGuides"), href: "#" },
                { name: t("footer.community"), href: "#" },
                { name: t("footer.tutors"), href: "#" },
                { name: t("footer.faq"), href: "#" },
            ],
        },
        {
            title: t("footer.legal"),
            links: [
                { name: t("footer.privacy"), href: "#" },
                { name: t("footer.terms"), href: "#" },
                { name: t("footer.cookies"), href: "#" },
            ],
        },
        {
            title: t("footer.contact"),
            links: [
                { name: t("footer.contactUs"), href: "#" },
                { name: t("footer.email"), href: "mailto:hello@lingano.com" },
                { name: t("footer.phone"), href: "tel:1-800-LINGANO22" },
            ],
        },
    ];

    const social = [
        { name: "Twitter", href: "#", icon: <FaTwitter className="h-6 w-6" /> },
        {
            name: "GitHub",
            href: "https://github.com/Lingano",
            icon: <FaGithub className="h-6 w-6" />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/lingano/",
            icon: <FaLinkedin className="h-6 w-6" />,
        },
        {
            name: "Discord",
            href: "https://discord.com/invite/lingano",
            icon: <FaDiscord className="h-6 w-6" />,
        },
    ];
    return (
        <footer
            id="contact"
            className="bg-transparent border-t border-base-200/50 dark:border-base-300/50 text-base-content dark:text-white"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
                    {/* Logo and tagline */}
                    <div className="mb-10 md:mb-0 flex flex-col items-center md:items-start">
                        <span className="inline-flex items-center gap-2 text-2xl font-extrabold text-indigo-600 mb-4">
                            <svg
                                width="40"
                                height="40"
                                fill="none"
                                viewBox="0 0 32 32"
                            >
                                <circle cx="16" cy="16" r="16" fill="#6366F1" />
                                <text
                                    x="16"
                                    y="22"
                                    textAnchor="middle"
                                    fontSize="16"
                                    fill="#fff"
                                    fontFamily="Arial"
                                >
                                    L
                                </text>
                            </svg>
                            Lingano
                        </span>{" "}
                        <p className="text-gray-600 max-w-xs text-center md:text-left mb-6">
                            {t("footer.tagline")}
                        </p>
                        <div className="flex gap-4">
                            {social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base-content/70 hover:text-base-content transition-colors"
                                    aria-label={item.name}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Navigation links */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
                        {navigation.map((section) => (
                            <nav key={section.title} className="space-y-2">
                                <h6 className="text-xs font-semibold text-primary uppercase mb-3">
                                    {section.title}
                                </h6>
                                {section.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-sm text-base-content/70 hover:text-base-content transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        ))}
                    </div>
                </div>{" "}
                <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
                    {" "}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className="text-sm tracking-wide text-center md:text-left">
                            {t("footer.copyright", {
                                year: new Date().getFullYear(),
                            })}
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-xs text-gray-500">
                                {t("footer.madeInSwitzerland")}
                            </span>
                            <div className="flex items-center gap-1">
                                <SwissFlag />
                                <span className="text-xs font-medium text-gray-600">
                                    {t("footer.switzerland")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="hover:text-indigo-600 transition-colors text-xs"
                        >
                            {t("footer.privacy")}
                        </a>
                        <a
                            href="#"
                            className="hover:text-indigo-600 transition-colors text-xs"
                        >
                            {t("footer.terms")}
                        </a>
                        <a
                            href="#"
                            className="hover:text-indigo-600 transition-colors text-xs"
                        >
                            {t("footer.cookies")}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
