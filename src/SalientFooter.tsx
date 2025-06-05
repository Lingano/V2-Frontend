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
    {
        name: "Twitter",
        href: "#",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/Lingano",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 7.43c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
        ),
    },
];

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-transparent border-t border-base-200/50 dark:border-base-300/50"
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
                                    className="text-gray-400 hover:text-indigo-600 transition-colors"
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
                                <h6 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
                                    {section.title}
                                </h6>
                                {section.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
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
