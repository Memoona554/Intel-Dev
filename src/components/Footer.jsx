import React from "react";
import {
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="bg-[#f9fafa] text-black py-10" data-aos="fade-up" data-aos-delay="100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between gap-y-10">
                        <div className="w-full sm:w-1/2 lg:w-1/5">
                            <img
                                className="w-48 h-auto"
                                src="/site.png"
                                alt="Intel Logo Logo"
                            />
                            <p className="mt-4 text-sm text-gray-700">
                                Intel Devs ignites growth and efficiency, unveiling your
                                business’s hidden potential through our top custom software
                                development services.
                            </p>
                            <div className="flex space-x-4 mt-4 text-gray-800">
                                <a href="https://www.linkedin.com/company/inteldevs/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-xl hover:text-blue-600" />
                                </a>
                                {/* <a href="https://www.facebook.com/vaivaltechpk/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-xl hover:text-blue-500" />
                                </a>
                                <a href="https://x.com/vaivaltechpk" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-xl hover:text-sky-500" />
                                </a>
                                <a href="https://www.instagram.com/vaivaltechpk/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-xl hover:text-pink-500" />
                                </a>
                                <a href="https://www.youtube.com/channel/UCc_fkl6Bl3gVM4U37Wd3qRQ" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="text-xl hover:text-red-600" />
                                </a>
                                <a href="https://www.tiktok.com/@vaivaltechpk" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className="text-xl hover:text-black" />
                                </a> */}
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/5">
                            <p className="font-semibold text-lg mb-4">Services</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><a href="/staff-augmentation" className="hover:underline">Staff Augmentation</a></li>
                                <li><a href="/services" className="hover:underline">Custom Software Development</a></li>
                                <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
                                <li><a href="/industries" className="hover:underline">Industries</a></li>
                                <li><a href="/contact-us" className="hover:underline">IT Consulting Services</a></li>
                            </ul>
                        </div>

                        {/* <div className="w-full sm:w-1/2 lg:w-1/5">
                            <p className="font-semibold text-lg mb-4">Technologies</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><a href="#" className="hover:underline">React</a></li>
                                <li><a href="#" className="hover:underline">Python</a></li>
                                <li><a href="#" className="hover:underline">MEAN Stack</a></li>
                                <li><a href="#" className="hover:underline">MERN Stack</a></li>
                            </ul>
                        </div> */}

                        <div className="w-full sm:w-1/2 lg:w-1/5">
                            <p className="font-semibold text-lg mb-4">Insights</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                                <li><a href="/about" className="hover:underline">About Us</a></li>
                                <li><a href="/blogs" className="hover:underline">Blog</a></li>
                                <li><a href="/careers" className="hover:underline">Career</a></li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </section>
            <section
                id="footerCopyRight"
                className="bg-blue-600 text-white py-4 w-full"
            >
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="mb-2 md:mb-0">
                        <p>All Rights Reserved © 2025 Intel Devs</p>
                    </div>

                    <nav>
                        <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                            
                            <li>|</li>
                            <li>
                            <Link to="/information-security" className="hover:underline"> Info Security Policy</Link>

                            </li>
                            <li>|</li>
                            <li>
                            <Link to="/privacy-policy" className="hover:underline">  Privacy Policy</Link>

                            </li>
                            
                            <li>|</li>
                            <li>
                            <Link to="/privacy-policy" className="hover:underline">  Privacy Policy</Link>

                            </li>
                            
                            <li>|</li>
                            <li>
                                <a href="/anti-salvery-policy" className="hover:underline">
                                Anti-Slavery Policy
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>

    );
};

export default Footer;
