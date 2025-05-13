// Import global styles and ensure tailwind classes are available
import "../index.css";
import { useState, useEffect } from "react";

const About = () => {
    // Check if user previously preferred dark mode from localStorage
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage first
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('dark-mode');
            if (savedMode !== null) {
                return savedMode === 'true';
            }
            // Otherwise check system preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Apply dark mode class to html element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'false');
        }
    }, [darkMode]);

    return (
        <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            {/* Sticky Navigation */}
            <nav className={`${isScrolled ? 'shadow-md bg-white dark:bg-gray-800' : 'bg-transparent'} sticky top-0 z-50 transition-all duration-300 py-4 px-6`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Lingano</span>
                    </div>
                    <div className="flex items-center space-x-8">
                        <button className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Home</button>
                        <button className="text-blue-600 dark:text-blue-400 font-medium">About</button>
                        <button className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Courses</button>
                        <button className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Blog</button>
                        <button className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Contact</button>
                    </div>
                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
                    >
                        {darkMode ? (
                            <span className="text-yellow-400 text-xl">☀️</span>
                        ) : (
                            <span className="text-blue-900 text-xl">🌙</span>
                        )}
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 dark:text-white">
                {/* Header section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-5xl lg:text-6xl">About Lingano</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                        Lingano is a revolutionary language learning platform
                        designed to help you master new languages quickly,
                        effectively, and with enjoyment. Our innovative approach
                        combines immersive learning experiences with cutting-edge
                        technology.
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Story</h2>
                    <div className="bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800">
                        <p className="text-gray-700 mb-4 dark:text-gray-300">
                            Founded in 2023, Lingano began with a simple mission: to
                            transform how people learn languages. Our founders
                            experienced firsthand the challenges of traditional language
                            learning methods and wanted to create something better—a
                            platform that makes language acquisition natural,
                            contextual, and personalized.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            What started as a small project has grown into a thriving
                            community of language learners from around the world. Today,
                            Lingano offers courses in over 25 languages, serving
                            students, professionals, travelers, and language enthusiasts
                            alike.
                        </p>
                    </div>
                </div>

                {/* Our Approach Section with Cards */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 dark:bg-gray-800">
                            <div className="bg-blue-50 p-8 flex items-center justify-center text-5xl dark:bg-blue-900/30">
                                🎯
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-700 mb-3 dark:text-blue-400">
                                    Contextual Learning
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    We believe in learning languages through
                                    real-world content. Our platform uses authentic
                                    materials like articles, videos, and
                                    conversations to help you learn language as it's
                                    actually used.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 dark:bg-gray-800">
                            <div className="bg-amber-50 p-8 flex items-center justify-center text-5xl dark:bg-amber-900/30">
                                🧠
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-700 mb-3 dark:text-blue-400">
                                    Spaced Repetition
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Our intelligent system uses spaced repetition
                                    algorithms to optimize your memory retention,
                                    presenting words and phrases at the perfect
                                    intervals for maximum learning efficiency.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 dark:bg-gray-800">
                            <div className="bg-teal-50 p-8 flex items-center justify-center text-5xl dark:bg-teal-900/30">
                                🤖
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-700 mb-3 dark:text-blue-400">
                                    AI-Powered Personalization
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Lingano adapts to your learning style,
                                    interests, and progress. Our AI technology
                                    creates a personalized learning path that
                                    evolves as you advance in your language journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-10 text-center">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">1M+</p>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Active Learners</p>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                        
                        <div className="group bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-5xl font-bold text-amber-500 dark:text-amber-400 mb-2 group-hover:scale-110 transition-transform">25+</p>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Languages</p>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-amber-100 dark:bg-amber-900/30 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                        
                        <div className="group bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform">92%</p>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Success Rate</p>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                        
                        <div className="group bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">4.8</p>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">User Rating</p>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-70 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                            <div className="bg-gray-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto mb-4 dark:bg-gray-700">
                                <span className="text-4xl">👩‍💼</span>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-700 text-center dark:text-blue-400">Sophia Chen</h3>
                            <p className="text-blue-500 font-medium text-center mb-3 dark:text-blue-300">Founder & CEO</p>
                            <p className="text-gray-600 text-center dark:text-gray-300">
                                Linguist with a passion for educational technology.
                                Previously led product at a leading EdTech company.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                            <div className="bg-gray-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto mb-4 dark:bg-gray-700">
                                <span className="text-4xl">👨‍💻</span>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-700 text-center dark:text-blue-400">Miguel Rodriguez</h3>
                            <p className="text-blue-500 font-medium text-center mb-3 dark:text-blue-300">CTO</p>
                            <p className="text-gray-600 text-center dark:text-gray-300">
                                AI researcher and polyglot who's fluent in 5
                                languages. Leads our technology and innovation
                                efforts.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                            <div className="bg-gray-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto mb-4 dark:bg-gray-700">
                                <span className="text-4xl">👨‍🎓</span>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-700 text-center dark:text-blue-400">Dr. James Wilson</h3>
                            <p className="text-blue-500 font-medium text-center mb-3 dark:text-blue-300">Head of Pedagogy</p>
                            <p className="text-gray-600 text-center dark:text-gray-300">
                                PhD in Applied Linguistics with 15+ years of
                                experience in language acquisition research.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                            <div className="bg-gray-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto mb-4 dark:bg-gray-700">
                                <span className="text-4xl">👩‍🎨</span>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-700 text-center dark:text-blue-400">Aisha Patel</h3>
                            <p className="text-blue-500 font-medium text-center mb-3 dark:text-blue-300">UX Director</p>
                            <p className="text-gray-600 text-center dark:text-gray-300">
                                Creates engaging learning experiences that make
                                language acquisition intuitive and enjoyable.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative">
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">"</span>
                            </div>
                            <div className="mb-4 text-yellow-400 flex">
                                {'★'.repeat(5).split('').map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                                Lingano completely transformed my language learning journey. In just 3 months, I went from being a complete beginner to having confident conversations in Spanish!
                            </p>
                            <div className="flex items-center">
                                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-lg">MJ</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Michael Johnson</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Business Professional</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial 2 */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative">
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">"</span>
                            </div>
                            <div className="mb-4 text-yellow-400 flex">
                                {'★'.repeat(5).split('').map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                                The personalization is incredible. Lingano somehow knows exactly what words I'm struggling with and helps me master them through natural context.
                            </p>
                            <div className="flex items-center">
                                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-lg">SA</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Sarah Ahmed</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Graduate Student</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Testimonial 3 */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative">
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">"</span>
                            </div>
                            <div className="mb-4 text-yellow-400 flex">
                                {'★'.repeat(5).split('').map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                                As someone who tried and failed with other language apps, Lingano was a revelation. The immersive approach and real-world content make all the difference.
                            </p>
                            <div className="flex items-center">
                                <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-lg">DP</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">David Park</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision and Mission */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Vision & Values</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 dark:from-blue-900 dark:to-blue-800">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">🌍</span>
                                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Our Vision</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                We envision a world where language barriers no
                                longer exist—where people can connect, collaborate,
                                and understand each other regardless of their native
                                tongues. Through accessible, effective language
                                learning, we aim to foster global communication and
                                cultural appreciation.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg p-8 dark:from-amber-900 dark:to-amber-800">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">💡</span>
                                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Our Values</h3>
                            </div>
                            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                                <li className="flex items-center">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                    <strong>Accessibility:</strong> We believe language
                                    learning should be available to everyone.
                                </li>
                                <li className="flex items-center">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                    <strong>Innovation:</strong> We continuously improve
                                    our methods based on the latest research.
                                </li>
                                <li className="flex items-center">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                    <strong>Community:</strong> We foster connections
                                    between learners worldwide.
                                </li>
                                <li className="flex items-center">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                    <strong>Cultural Respect:</strong> We promote
                                    understanding and appreciation of diverse cultures.
                                </li>
                                <li className="flex items-center">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                    <strong>Effectiveness:</strong> We are committed to
                                    providing learning methods that actually work.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-2xl shadow-xl p-10 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Start Your Language Journey?
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Join thousands of learners who've already discovered a
                        better way to master new languages. Start for free and
                        experience the Lingano difference today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700">
                            Get Started Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400">Lingano</h3>
                            <p className="text-gray-600 dark:text-gray-400">Making language learning natural, effective, and enjoyable for everyone.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Company</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">About Us</li>
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Careers</li>
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Blog</li>
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Press</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Resources</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Language Guides</li>
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Community</li>
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Tutors</li>
                                <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Contact</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>hello@lingano.com</li>
                                <li>1-800-LINGANO</li>
                                <li>123 Language Street</li>
                                <li>San Francisco, CA 94103</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700">
                        © {new Date().getFullYear()} Lingano. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default About;
