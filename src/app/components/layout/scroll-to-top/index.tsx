"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        setScrollProgress(scrolled);
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const circumference = 2 * Math.PI * 16;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="scroll-to-top hidden md:flex fixed bottom-8 right-8 z-50 w-12 h-12 items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Scroll to top"
                >
                    <div className="relative w-full h-full rounded-full bg-primary shadow-lg flex items-center justify-center">
                        {/* Progress Circle Background */}
                        <svg
                            className="absolute inset-0 w-full h-full transform -rotate-90"
                            viewBox="0 0 48 48"
                        >
                            <circle
                                cx="24"
                                cy="24"
                                r="16"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.3)"
                                strokeWidth="2"
                            />
                            <motion.circle
                                cx="24"
                                cy="24"
                                r="16"
                                fill="none"
                                stroke="rgba(255, 255, 255, 1)"
                                strokeWidth="2"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                animate={{ strokeDashoffset }}
                                transition={{ duration: 0.3 }}
                            />
                        </svg>

                        {/* Arrow Icon */}
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="relative z-10"
                        >
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
