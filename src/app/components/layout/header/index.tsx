"use client";

import { useState, useEffect } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isSticky, setIsSticky] = useState(false);

    const sections = [
        { id: "hero", label: "Home", icon: "🏠" },
        { id: "about", label: "About", icon: "👤" },
        { id: "experience", label: "Experience", icon: "💼" },
        { id: "education", label: "Education", icon: "🎓" },
        { id: "work", label: "Work", icon: "📂" },
        { id: "contact", label: "Contact", icon: "💬" },
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
        }
    };

    return (
        <header
            className={`navbar left-0 z-50 w-full transition-all duration-300 ${
                isSticky ? "fixed top-0 py-4" : "absolute top-0 py-7"
            }`}
        >
            <div className="container">
                <nav className="flex justify-center items-center">
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

                    {/* Mobile Icon Navigation */}
                    <div className="lg:hidden flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 py-3 shadow-lg border border-white/30 gap-0">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`nav-button py-2 px-3 rounded-full text-lg transition-all duration-300 ${
                                    activeSection === section.id
                                        ? "bg-primary scale-110"
                                        : "text-black"
                                }`}
                                title={section.label}
                                aria-label={section.label}
                            >
                                {section.icon}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
