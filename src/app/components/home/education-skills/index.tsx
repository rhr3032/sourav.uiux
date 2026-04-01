"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EducationSkills = () => {
    const [educationData, setEductionData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setEductionData(data?.educationData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section>
            <div className="border-t border-softGray overflow-hidden">
                <div className="container relative z-10">
                    <Image src={"/images/home/education-skill/edu-skill-vector.svg"} alt="vector" width={260} height={170} className="no-print absolute top-0 left-0 transform -translate-y-1/2" />
                    <div className="relative z-10 py-16 md:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>Education & Skills</h2>
                            <p className="text-xl text-orange-500">( 03 )</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20">
                            <motion.div 
                                className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {educationData?.education?.map((value: any, index: any) => {
                                    return (
                                        <motion.div key={index} variants={itemVariants} className="flex items-start gap-6">
                                            <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-2">
                                                <h5>{value?.title}</h5>
                                                <p className="font-normal">{value?.description}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                            <motion.div 
                                className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {educationData?.skills?.map((value: any, index: any) => {
                                    return (
                                        <motion.div 
                                            key={index} 
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                                        >
                                            <div className="flex flex-col items-center gap-5">
                                                <Image src={value?.icon} alt="icon" width={70} height={70} />
                                                <p className="text-black font-normal">{value?.name}</p>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <motion.svg
                                                        key={i}
                                                        width="9"
                                                        height="9"
                                                        viewBox="0 0 9 9"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        <rect
                                                            width="9"
                                                            height="9"
                                                            rx="4.5"
                                                            fill={i < value?.rating ? '#FE4300' : '#C0D8E0'}
                                                        />
                                                    </motion.svg>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationSkills