"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LatestWork = () => {
    const [workData, setWorkData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/work-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setWorkData(data?.workData);
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
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section>
            <div className="bg-softGray">
                <div className="container">
                    <div className="py-16 xl:py-32 ">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                            <h2>Latest Works</h2>
                            <p className="text-xl text-orange-500">( 04 )</p>
                        </div>
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {workData?.map((value: any, index: any) => {
                                return (
                                    <motion.div key={index} variants={itemVariants} className="group flex flex-col gap-3 xl:gap-6">
                                        <motion.div 
                                            className="relative"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Image src={value?.image} alt="image" width={570} height={414} className="rounded-lg w-full h-full object-cover" />
                                            <Link
                                                href={`${value.slug}`}
                                                className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg"
                                            >
                                                <span className="flex justify-center items-center p-5 w-full">
                                                    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.333374" width="64" height="64" rx="32" fill="#FE4300" />
                                                        <path
                                                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                                            stroke="#FFFF"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </motion.div>
                                        <div className="flex flex-col gap-0 xl:gap-2">
                                            <div className="flex items-center justify-between">
                                                <Link href={`${value.slug}`}>
                                                    <h5>{value?.title}</h5>
                                                </Link>
                                                <Image src={"/images/icon/right-arrow-icon.svg"} alt="right-arrow-icon" width={30} height={30} />
                                            </div>
                                            <p>Client: {value?.client}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestWork