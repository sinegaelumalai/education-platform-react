import React from "react";
import Navbar from "../components/Navbar";
import bgimg from "../assets/bgimg.png";
import Audience from "../components/Audience";
import AmazingThings from "../components/AmazingThings";
import GameCode from "../components/GameCode";
import { Link } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial";
import ReadyToLearn from "../components/ReadyToLearn";
import Footer from "../components/Footer";
import FeaturesGames from "../components/FeaturesGames";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <Navbar />

            <section className="bg-[#f4f4f4] min-h-screen px-10">

                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    <div className="grid lg:grid-cols-2 items-center gap-20 pt-12">

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-6xl md:text-7xl font-black leading-tight text-[#2f261d]"
                            >
                                Make
                                <br />
                                learning fun!
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="mt-8 text-2xl text-gray-600 max-w-md leading-relaxed"
                            >
                                Any subject, in any language, on any device,
                                for all ages!
                            </motion.p>

                            <motion.button
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-14 py-4 rounded-md text-lg font-semibold transition"
                            >
                                Sign up for free
                            </motion.button>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="mt-12"
                            >
                                <p className="font-semibold text-sm mb-4">
                                    Or download the app:
                                </p>

                                <div className="flex gap-4">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt=""
                                        className="h-12 cursor-pointer"
                                    />

                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt=""
                                        className="h-12 cursor-pointer"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex justify-center"
                        >
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                src={bgimg}
                                alt=""
                                className="w-full max-w-lg"
                            />
                        </motion.div>

                    </div>

                </div>

            </section>

            <Audience />
            <AmazingThings />
            <GameCode />
            <HowItWorks />
            <Testimonial />
            <ReadyToLearn />
            <Footer />
        </>
    );
};

export default Home;
