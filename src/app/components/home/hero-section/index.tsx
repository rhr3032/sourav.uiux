"use client";

import Image from "next/image"
import { motion } from "framer-motion"

const index = () => {
    const handleDownloadPDF = () => {
        window.print();
    };

    const handleViewPortfolio = () => {
        const element = document.getElementById("work");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section className="relative hero-section overflow-hidden pt-20 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
            <div className="container">
                <div className="flex justify-center items-center">
                    <motion.div 
                        className="flex flex-col gap-4 md:gap-7 max-w-2xl text-left md:text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <div className="flex items-center justify-start md:justify-center gap-8">
                                <h1>I'm Sourav</h1>
                                <div className="wave">
                                    <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} className=""/>
                                </div>
                            </div>
                            <h3>UI/UX Designer</h3>
                        </motion.div>
                        
                        <motion.p variants={itemVariants} className="text-secondary font-normal mx-auto">
                            Crafting world-class digital experiences through thoughtful design, deep user understanding, and a focus on creating meaningful and engaging interactions.
                        </motion.p>
                        
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 pt-4 justify-center">
                            <button
                                onClick={handleDownloadPDF}
                                className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 bg-primary rounded-full group"
                            >
                                <span className="relative z-10 text-sm sm:text-base md:text-xl font-medium text-white group-hover:text-white transition-colors duration-300">
                                    Download Resume
                                </span>
                            </button>
                            
                            <button
                                onClick={handleViewPortfolio}
                                className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-black rounded-full group hover:border-primary"
                            >
                                <span className="relative z-10 text-sm sm:text-base md:text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                                    View Portfolio
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default index