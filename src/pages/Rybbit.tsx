import { useState, useEffect } from "react";
import "../index.css";
import "./Rybbit.css"; // Import the dedicated Rybbit CSS file

const Rybbit = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("dark-mode");
            if (savedMode !== null) {
                return savedMode === "true";
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-black text-white rybbit-page">
            {/* Navbar - Fixed and transparent that becomes solid on scroll */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}`}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <span className="text-primary font-bold text-2xl">RYBBIT</span>
                        </div>

                        {/* Navigation Links */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-white hover:text-primary transition">Home</a>
                            <a href="#" className="text-white hover:text-primary transition">Features</a>
                            <a href="#" className="text-white hover:text-primary transition">Ecosystem</a>
                            <a href="#" className="text-white hover:text-primary transition">Roadmap</a>
                            <a href="#" className="text-white hover:text-primary transition">Community</a>
                        </nav>

                        {/* CTA Button */}
                        <div>
                            <button className="bg-primary hover:bg-primary-focus text-black font-bold py-2 px-6 rounded-full transition">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="text-white">
                                <span className="text-xl">☰</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section with Gradient Background */}
            <section className="relative min-h-screen flex items-center rybbit-hero">
                {/* Gradient Background */}
                <div className="absolute inset-0 rybbit-gradient-bg z-0"></div>
                
                {/* Animated Circles */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="container mx-auto px-4 z-10 pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-primary">Blockchain</span> Infrastructure for the Future
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8">
                                Building the next generation of decentralized applications with
                                unparalleled speed, security, and scalability.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="rybbit-button py-3 px-8">
                                    Explore Now
                                </button>
                                <button className="border border-white hover:border-primary hover:text-primary text-white font-bold py-3 px-8 rounded-full transition">
                                    Documentation
                                </button>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-12">
                                <div>
                                    <p className="text-primary text-3xl font-bold">100K+</p>
                                    <p className="text-gray-400">Active Users</p>
                                </div>
                                <div>
                                    <p className="text-primary text-3xl font-bold">$1.2B</p>
                                    <p className="text-gray-400">Total Value Locked</p>
                                </div>
                                <div>
                                    <p className="text-primary text-3xl font-bold">10K+</p>
                                    <p className="text-gray-400">Transactions/sec</p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image/Animation */}
                        <div className="relative">
                            <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 rounded-full border border-primary/30 flex items-center justify-center animate-spin-slow">
                                    <div className="w-1/2 h-1/2 rounded-full bg-black border border-primary/50 flex items-center justify-center">
                                        <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary to-primary/50 animate-pulse glow-primary"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Features Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key <span className="text-primary">Features</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our cutting-edge technology provides everything you need to build 
                            and scale your decentralized applications.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature Card 1 */}
                        <div className="rybbit-card p-8">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <span className="text-xl text-primary">⬢</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Scalable Architecture</h3>
                            <p className="text-gray-400">
                                Process thousands of transactions per second with minimal latency
                                and environmental impact.
                            </p>
                        </div>
                        
                        {/* Feature Card 2 */}
                        <div className="rybbit-card p-8">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <span className="text-xl text-primary">🔒</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
                            <p className="text-gray-400">
                                Military-grade encryption and consensus protocols protect your
                                assets and transactions.
                            </p>
                        </div>
                        
                        {/* Feature Card 3 */}
                        <div className="rybbit-card p-8">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <span className="text-xl text-primary">🔄</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Cross-Chain Integration</h3>
                            <p className="text-gray-400">
                                Seamlessly connect with other blockchains and protocols for
                                maximum interoperability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Ecosystem Section */}
            <section className="py-20 rybbit-gradient-bg">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-primary">Ecosystem</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Join a thriving ecosystem of developers, partners, and applications
                            building the future of decentralized finance.
                        </p>
                    </div>
                    
                    <div className="relative">
                        {/* Ecosystem Diagram - Simplified for demo */}
                        <div className="max-w-4xl mx-auto aspect-video relative rybbit-nodes">
                            {/* Central Node */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full z-20 flex items-center justify-center glow-primary">
                                <span className="font-bold">RYBBIT</span>
                            </div>
                            
                            {/* Orbit */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-gray-700 border-dashed"></div>
                            
                            {/* Nodes */}
                            <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 w-16 h-16 bg-black rounded-full border border-primary flex items-center justify-center">
                                <span className="text-xs">DeFi</span>
                            </div>
                            <div className="absolute top-[50%] left-[15%] transform -translate-y-1/2 w-16 h-16 bg-black rounded-full border border-primary flex items-center justify-center">
                                <span className="text-xs">NFTs</span>
                            </div>
                            <div className="absolute top-[50%] left-[85%] transform -translate-y-1/2 w-16 h-16 bg-black rounded-full border border-primary flex items-center justify-center">
                                <span className="text-xs">Gaming</span>
                            </div>
                            <div className="absolute top-[85%] left-[50%] transform -translate-x-1/2 w-16 h-16 bg-black rounded-full border border-primary flex items-center justify-center">
                                <span className="text-xs">Governance</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Partners */}
                    <div className="mt-24">
                        <p className="text-center text-gray-400 mb-8">Trusted by leading organizations</p>
                        <div className="flex flex-wrap justify-center gap-8 opacity-50">
                            {/* Partner logos would go here */}
                            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center">Partner 1</div>
                            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center">Partner 2</div>
                            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center">Partner 3</div>
                            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center">Partner 4</div>
                            <div className="w-32 h-12 bg-gray-800 rounded flex items-center justify-center">Partner 5</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="text-primary">Build the Future</span>?</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Join thousands of developers already building on Rybbit's
                            next-generation blockchain infrastructure.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="rybbit-button py-3 px-8">
                                Get Started
                            </button>
                            <button className="bg-black border border-primary hover:bg-primary/10 text-primary font-bold py-3 px-8 rounded-full transition">
                                Read Docs
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="py-16 bg-black border-t border-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-primary font-bold text-2xl mb-4">RYBBIT</div>
                            <p className="text-gray-400 mb-4">
                                Building the decentralized future of the internet.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-primary">
                                    <span className="text-xl">𝕏</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-primary">
                                    <span className="text-xl">♆</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-primary">
                                    <span className="text-xl">in</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-primary">
                                    <span className="text-xl">f</span>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-bold mb-4">Products</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-primary">Mainnet</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Testnet</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Wallet</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Explorer</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-bold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-primary">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Whitepaper</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Developer Portal</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Community</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-bold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-primary">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between">
                        <p className="text-gray-500">© 2025 Rybbit. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-500 hover:text-primary">Privacy Policy</a>
                            <a href="#" className="text-gray-500 hover:text-primary">Terms of Service</a>
                            <a href="#" className="text-gray-500 hover:text-primary">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Rybbit;