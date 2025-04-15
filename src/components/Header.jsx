/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Header() {
    const [activeLink, setActiveLink] = useState("/");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 50);

            sections.forEach((section) => {
                const offset = section.offsetTop - 80;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                if (scrollTop >= offset && scrollTop < offset + height) {
                    setActiveLink(`#${id}`);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, null, href);
    };

    const navItems = [
        {
            name: "Services",
            href: "/services",
            dropdown: [
                { name: "SDaaS", href: "/services/sdaas", image: "/service_1.png" },
                { name: "MVP Development", href: "/services/mpv-development", image: "/service_2.png" },
                { name: "Legacy System Modernization", href: "#uiux", image: "/service_3.png" },
                { name: "SecaaS", href: "/services/security-as-a-service", image: "/service_4.png" },
                { name: "Blockchain Development", href: "/services/block-chain-development", image: "/service_5.png" },
                { name: "AI Development", href: "/services/ai-development", image: "/service_6.png" },
            ],
        },
        {
            name: "Staff Augmentation",
            href: "#staff-augmentation",
            dropdown: [
                { name: "SDaaS", href: "#webdev" },
                { name: "MVP Development", href: "#appdev" },
                { name: "Legacy System Modernization", href: "#uiux" },
                { name: "Legacy System Modernization", href: "#uiux" },
                {name: "SecaaS",href:'#'},
                {name: "Blockchain Development",href:'#'},
                {name: "AI Development",href:'#'},

            ],
        },
        {
            name: "Portfolio",
            href: "#portfolio",
            dropdown: [
                { name: "Vividly SRL", href: "https://vividly.it/" },
                { name: "Kombo", href: "https://getkombo.ai/" },
                { name: "DexCheck", href: "https://dexcheck.ai/app" },
            ],
        },
        {
            name: "Insight",
            href: "#",
            dropdown: [
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "#blog" },
                { name: "Career", href: "#career" },
            ],
        },
        { name: "Industries", href: "/industries" },
        { name: "Contact", href: "/contact-us" },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-blue-600 " : "bg-transparent"}`}>
            <div className="lg:container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/">
                    <h1 className="text-2xl font-bold text-white">INTEL DEVS</h1>
                </a>

                <div className="hidden lg:flex lg:space-x-2 space-x-6 text-white font-medium relative">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            {item.href.startsWith("#") ? (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item.href);
                                    }}
                                    className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-white/10 transition"
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <span>
                                            {openDropdown === item.name ? (
                                                <FaChevronUp className="ml-1 text-sm" />
                                            ) : (
                                                <FaChevronDown className="ml-1 text-sm" />
                                            )}
                                        </span>
                                    )}
                                </button>
                            ) : (
                                <Link
                                    to={item.href}
                                    className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-white/10 transition"
                                >
                                    {item.name}
                                </Link>
                            )}


                            {item.dropdown && (
                                <div
                                    className={`absolute left-0 top-full mt-2 w-auto bg-white rounded-md shadow-xl transition-all duration-300 z-50 ${openDropdown === item.name
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                >
                                    <div className="p-4 space-y-2">
                                        <div
                                            className={`grid ${item.name === 'Services' ? 'grid-cols-2 gap-4 w-100' : 'grid-cols-1'}`}
                                        >
                                            {item.name === "Services" ? (
                                                item.dropdown.map((subItem, index) => (
                                                    <div key={subItem.name} className="flex flex-col items-center text-center">
                                                          <Link to={subItem.href} key={subItem.name} 
                                                            className="mb-2 text-black text-sm font-medium transition hover:text-blue-600"
                                                            >

                                                       
                                                            {subItem.name}
                                                        
                                                        <img
                                                            src={subItem.image}
                                                            alt={`Image for ${subItem.name}`}
                                                            className="w-[160px] h-auto mx-auto cursor-pointer"
                                                        />
                                                        </Link>
                                                    </div>
                                                ))
                                                
                                            ) : (
                                                item.dropdown.map((subItem) => (
                                                    subItem.href.startsWith("/") ? (
                                                        <Link
                                                            to={subItem.href}
                                                            onClick={() => {
                                                                setOpenDropdown(null);
                                                            }}
                                                            className="block px-4 py-2 text-black rounded hover:bg-blue-100 hover:text-blue-600 text-sm font-medium transition"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            href={subItem.href}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleLinkClick(subItem.href);
                                                                setOpenDropdown(null);
                                                            }}
                                                            className="block px-4 py-2 text-black rounded hover:bg-blue-100 hover:text-blue-600 text-sm font-medium transition"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    )

                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>



                <div className="flex items-center gap-3">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex flex-col justify-center items-end  space-y-1 ml-4 h-10 px-4 border border-white/20 rounded-md text-white bg-transparent"
                    >
                        <span className="w-7 h-0.5 bg-white transition"></span>
                        <span className="w-6 h-0.5 bg-white transition"></span>
                        <span className="w-5 h-0.5 bg-white transition"></span>
                        <span className="w-4 h-0.5 bg-white transition"></span>

                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className={`lg:hidden absolute top-full left-0 right-0 transform transition-transform duration-300 flex flex-col bg-gray-100 border-t border-white/20 shadow-md px-5 py-4 z-40 text-white space-y-4  ${menuOpen ? "translate-y-0" : "-translate-y-full"} `}>
                    {navItems.map((item) => (
                        <div key={item.name}>
                            {item.dropdown ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === item.name ? null : item.name)
                                        }
                                        className="w-full text-black text-left flex justify-between items-center py-2"
                                    >
                                        <span>{item.name}</span>
                                        <span>
                                            {openDropdown === item.name ? <FaChevronUp /> : <FaChevronDown />}
                                        </span>
                                    </button>

                                    {openDropdown === item.name && (
                                        <div className="ml-4 border-l text-black border-white/30 pl-4 space-y-2">
                                            {item.dropdown.map((subItem) =>
                                                subItem.href.startsWith("/") ? (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.href}
                                                        onClick={() => {
                                                            setMenuOpen(false);
                                                            setOpenDropdown(null);
                                                        }}
                                                        className="block hover:text-blue-400"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleLinkClick(subItem.href);
                                                            setMenuOpen(false);
                                                            setOpenDropdown(null);
                                                        }}
                                                        className="block hover:text-blue-400"
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    )}
                                </>
                            ) : (
                                item.href.startsWith("/") ? (
                                    <Link
                                        to={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-black py-2 hover:text-blue-400"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(item.href);
                                            setMenuOpen(false);
                                        }}
                                        className="block text-black py-2 hover:text-blue-400"
                                    >
                                        {item.name}
                                    </a>
                                )
                            )}
                        </div>
                    ))}

                </div>
            )}

        </header>
    );
}

export default Header;
