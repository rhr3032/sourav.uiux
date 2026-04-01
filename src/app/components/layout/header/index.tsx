"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, GraduationCap, Folder, MessageSquare } from "lucide-react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isSticky, setIsSticky] = useState(false);

    const sections = [
        { id: "hero", label: "Home", Icon: Home },
        { id: "about", label: "About", Icon: User },
        { id: "experience", label: "Experience", Icon: Briefcase },
        { id: "education", label: "Education", Icon: GraduationCap },
        { id: "work", label: "Work", Icon: Folder },
        { id: "contact", label: "Contact", Icon: MessageSquare },
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
                                    className={`nav-button py-2 px-4 xl:px-5 rounded-full font-medium text-sm xl:text-base transition-all duration-300 flex items-center gap-2 ${
                                        activeSection === section.id
                                            ? "bg-primary text-white"
                                            : "text-black hover:text-primary"
                                    }`}
                                >
                                    <section.Icon size={18} />
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Icon Navigation (Bottom) */}
            <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 py-2 shadow-lg border border-white/30 gap-3">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`nav-button py-1.5 px-2 rounded-full transition-all duration-300 ${
                                activeSection === section.id
                                    ? "bg-primary text-white scale-110"
                                    : "text-black"
                            }`}
                            title={section.label}
                            aria-label={section.label}
                        >
                            <section.Icon size={18} />
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
