import { motion } from "framer-motion";
import logos from "../assets/logos.png";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaTiktok,
} from "react-icons/fa";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-[#4566F7] text-white pt-20 pb-10">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
                >

                    <motion.div variants={itemVariants}>
                        <img
                            src={logos}
                            alt="Logo"
                            className="w-56"
                        />

                        <h4 className="mt-10 font-semibold">
                            Get the app:
                        </h4>

                        <div className="mt-5 space-y-3">

                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt=""
                                className="h-10 cursor-pointer"
                            />

                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt=""
                                className="h-10 cursor-pointer"
                            />

                        </div>

                        <h4 className="mt-10 font-semibold">
                            Follow us:
                        </h4>

                        <div className="flex gap-4 mt-5">

                            {[
                                FaLinkedinIn,
                                FaFacebookF,
                                FaInstagram,
                                FaTwitter,
                                FaTiktok
                            ].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-full bg-white text-[#4566F7] flex items-center justify-center cursor-pointer"
                                >
                                    <Icon />
                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-8">
                            About
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            {["Company", "Leadership", "Jobs - HIRING!", "Pricing", "Press", "Investors"].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="cursor-pointer hover:text-white transition-colors"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-8">
                            Solutions
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            {["At School", "At Work", "At Home"].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="cursor-pointer hover:text-white transition-colors"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-8">
                            Resources
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            {["Study with Kurtis", "Blog", "Kurtis Certified", "Help Center", "Library", "Shop", "Safety Center"].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="cursor-pointer hover:text-white transition-colors"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-8">
                            Terms and conditions
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            {["Terms and Conditions", "Privacy Policy", "US Privacy Laws", "Children's Privacy Policy", "Inclusion and Accessibility Policy"].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="cursor-pointer hover:text-white transition-colors"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="flex gap-4 mt-10">

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="rounded p-2 flex items-center justify-center"
                            >
                                <img
                                    src={f1}
                                    alt="Microsoft Partner"
                                    className="w-24 h-auto object-contain"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="rounded-md shadow-sm px-3 py-2 flex items-center justify-center w-28 h-16"
                            >
                                <img
                                    src={f2}
                                    alt="Google for Education"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </motion.div>

                        </div>

                    </motion.div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-white/20 mt-16 pt-8 text-center text-white/80"
                >
                    Copyright © 2020, Kurtis All rights reserved.
                </motion.div>

            </div>

        </footer>
    );
};

export default Footer;
