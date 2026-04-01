"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section>
            <div className="relative bg-softGray py-10 md:py-32">
                <div className="absolute top-0 w-full px-9">
                    <Image
                        src="/images/home/about-me/resume-bg-img.svg"
                        alt="resume-bg-img"
                        width={1200}
                        height={348}
                        className="w-full"
                    />
                </div>

                <div className="relative z-10">
                    <div className="container">
                        <motion.div 
                            className="flex items-center justify-between gap-2 border-b border-black pb-7"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2>About Me</h2>
                            <p className="text-xl text-primary">( 01 )</p>
                        </motion.div>

                        <div className="pt-10 xl:pt-16 flex gap-10 items-start justify-between">
                            <motion.div 
                                className="w-[303px] h-[440px] hidden lg:flex"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src="/images/home/about-me/about-banner-img.svg"
                                    alt="about-banner"
                                    width={303}
                                    height={440}
                                    className="w-full h-full"
                                />
                            </motion.div>

                            <motion.div 
                                className="w-full lg:max-w-2xl flex-1"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.p variants={itemVariants}>
                                    I'm a passionate UI/UX designer with over 6 years of experience in crafting intuitive and visually appealing digital experiences. I specialize in creating user-centered designs that not only look great but also provide seamless functionality. My expertise lies in understanding user needs, conducting research, and translating insights into innovative design solutions that drive engagement and satisfaction.
                                </motion.p>

                                <motion.div 
                                    className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {[
                                        { count: "01+", label: "Years of experience" },
                                        { count: "10+", label: "Satisfied Clients" },
                                        { count: "50+", label: "Project Completed" },
                                    ].map((item, i) => (
                                        <motion.div key={i} variants={itemVariants}>
                                            <h3>{item.count}</h3>
                                            <p className="text-base md:text-lg text-black">{item.label}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div 
                                    className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-3.5">
                                        <Image
                                            src="/images/icon/lang-icon.svg"
                                            alt="lang-icon"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-base xl:text-xl text-black">Language</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center items-center gap-2.5">
                                        {["English", "Bangla", "Spanish"].map((lang) => (
                                            <p
                                                key={lang}
                                                className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                                            >
                                                {lang}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
