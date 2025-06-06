import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const navigation = [
    {
        title: "Company",
        links: [
            { name: "About", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Press", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Language Guides", href: "#" },
            { name: "Community", href: "#" },
            { name: "Tutors", href: "#" },
            { name: "FAQ", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "Contact Us", href: "#" },
            { name: "hello@lingano.com", href: "mailto:hello@lingano.com" },
            { name: "1-800-LINGANO22", href: "tel:1-800-LINGANO22" },
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

const Footer = () => {
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
                        </span>
                        <p className="text-gray-600 max-w-xs text-center md:text-left mb-6">
                            Making language learning natural, effective, and
                            enjoyable for everyone.
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
                </div>
                <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
                    <p className="text-sm tracking-wide text-center md:text-left">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold">Lingano</span>. All
                        rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="hover:text-indigo-600 transition-colors text-xs"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-indigo-600 transition-colors text-xs"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="hover:text-indigo-600 transition-colors text-xs"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
