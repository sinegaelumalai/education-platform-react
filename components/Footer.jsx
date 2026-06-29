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
    return (
        <footer className="bg-[#4566F7] text-white pt-20 pb-10">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Logo */}

                    <div>

                        <img
                            src={logos}
                            alt="Logo"
                            className="w-56"
                        />

                        <h4 className="mt-10 font-semibold">
                            Get the app:
                        </h4>

                        <div className="mt-5 space-y-3">

                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt=""
                                className="h-10"
                            />

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt=""
                                className="h-10"
                            />

                        </div>

                        <h4 className="mt-10 font-semibold">
                            Follow us:
                        </h4>

                        <div className="flex gap-4 mt-5">

                            <div className="w-10 h-10 rounded-full bg-white text-[#4566F7] flex items-center justify-center cursor-pointer">
                                <FaLinkedinIn />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white text-[#4566F7] flex items-center justify-center cursor-pointer">
                                <FaFacebookF />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white text-[#4566F7] flex items-center justify-center cursor-pointer">
                                <FaInstagram />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white text-[#4566F7] flex items-center justify-center cursor-pointer">
                                <FaTwitter />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white text-[#4566F7] flex items-center justify-center cursor-pointer">
                                <FaTiktok />
                            </div>

                        </div>

                    </div>

                    {/* About */}

                    <div>

                        <h3 className="text-2xl font-bold mb-8">
                            About
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            <li>Company</li>
                            <li>Leadership</li>
                            <li>Jobs - HIRING!</li>
                            <li>Pricing</li>
                            <li>Press</li>
                            <li>Investors</li>
                        </ul>

                    </div>

                    {/* Solutions */}

                    <div>

                        <h3 className="text-2xl font-bold mb-8">
                            Solutions
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            <li>At School</li>
                            <li>At Work</li>
                            <li>At Home</li>
                        </ul>

                    </div>

                    {/* Resources */}

                    <div>

                        <h3 className="text-2xl font-bold mb-8">
                            Resources
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            <li>Study with Kurtis</li>
                            <li>Blog</li>
                            <li>Kurtis Certified</li>
                            <li>Help Center</li>
                            <li>Library</li>
                            <li>Shop</li>
                            <li>Safety Center</li>
                        </ul>

                    </div>

                    {/* Terms */}

                    <div>

                        <h3 className="text-2xl font-bold mb-8">
                            Terms and conditions
                        </h3>

                        <ul className="space-y-5 text-white/90">
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>US Privacy Laws</li>
                            <li>Children's Privacy Policy</li>
                            <li>Inclusion and Accessibility Policy</li>
                        </ul>

                        <div className="flex gap-4 mt-10">

                            <div className=" rounded p-2 flex items-center justify-center">
                                <img
                                    src={f1}
                                    alt="Microsoft Partner"
                                    className="w-24 h-auto object-contain"
                                />
                            </div>

                            <div className="rounded-md shadow-sm px-3 py-2 flex items-center justify-center w-28 h-16">
                                <img
                                    src={f2}
                                    alt="Google for Education"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                        </div>

                    </div>

                </div>

                <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/80">

                    Copyright © 2020, Kurtis All rights reserved.

                </div>

            </div>

        </footer>
    );
};

export default Footer;