"use client";

import { useState, useEffect } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "work", label: "Work" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            // Check which section is in view
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                    }
                }
            });

            // Set sticky after hero section
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`navbar left-0 z-50 w-full transition-all duration-300 ${
                isSticky ? "fixed top-0 py-4" : "absolute top-0 py-7"
            }`}
        >
            <div className="container">
                <nav className="flex justify-between lg:justify-center items-center">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/30">
                        <div className="flex items-center gap-0">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`nav-button py-2 px-4 xl:px-5 rounded-full font-medium text-sm xl:text-base transition-all duration-300 ${
                                        activeSection === section.id
                                            ? "bg-primary text-white"
                                            : "text-black hover:text-primary"
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Hamburger Menu (Right Side) */}
                    <div className="lg:hidden flex items-center ml-auto">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-black text-2xl focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Backdrop Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ top: isSticky ? "60px" : "80px" }}
                />
            )}

            {/* Mobile Sidebar Menu */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-screen bg-white/95 backdrop-blur-md shadow-2xl border-l border-white/30 w-64 transition-transform duration-300 ease-in-out z-40 ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ paddingTop: isSticky ? "60px" : "80px" }}
            >
                <div className="flex flex-col gap-2 p-6">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`nav-button py-3 px-4 rounded-lg font-medium text-base transition-all duration-300 text-left ${
                                activeSection === section.id
                                    ? "bg-primary text-white"
                                    : "text-black hover:bg-gray-200 hover:text-primary"
                            }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
