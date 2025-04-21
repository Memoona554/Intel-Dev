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
            name: "Home",
            href: "/",

        },
        {
            name: "Services",
            href: "/services",
            dropdown: [
                { name: "SaaS", href: "/services/saas", image: "/service_1.png" },
                { name: "MVP Development", href: "/services/mpv-development", image: "/service_2.png" },
                { name: "Blockchain Development", href: "/services/block-chain-development", image: "/service_5.png" },
                { name: "AI Development", href: "/services/ai-development", image: "/service_6.png" },
            ],
        },
        {
            name: "Staff Augmentation",
            href: "/staff-augmentation",
            dropdown: {
                cta: {
                    title: "Hire AI Powered Developer Now!",
                    description: "Collaborate with industry’s best IT talent & achieve 2x efficiency.",
                    image: "/cta-image.png",
                    href: "/contact-us",
                },
                columns: [
                    {
                        title: "",
                        items: [
                            { name: "React Developer", href: "#" },
                            { name: "Node Js Developer", href: "#" },
                            { name: "MERN Stack Developers", href: "#" },
                            { name: "MEVN Stack Developers", href: "#" },
                            { name: "MEAN Stack Developer", href: "#" },
                            
                           
                        ],
                    },
                    {
                        title: "",
                        items: [
                            { name: "Vue Js Developers", href: "#" },
                            { name: "Django Developers", href: "#" },
                            { name: "Android Developers", href: "#" },
                            { name: "PHP Developers", href: "#" },
                            { name: "Laravel Developers", href: "#" },
                        ],
                    },
                    {
                        title: "",
                        items: [
                            { name: "Angular Developers", href: "#" },
                            { name: "Python Developers", href: "#" },
                            { name: "Project Manager/Scrum Master", href: "#" },
                            { name: "DevOps Engineer", href: "#" },
                            { name: "Blockchain Developers", href: "#" },
                        ],
                    },
                ],
            },
        },
        {
            name: "Portfolio",
            href: "/portfolio",
            dropdown: [
                { name: "Vividly SRL", href: "/portfolio/vividly" },
                { name: "Kombo", href: "/portfolio/kombo" },
                { name: "DexCheck", href: "/portfolio/dex-check" },
                { name: "XANA", href: "/portfolio/xana" },

            ],
        },
        {
            name: "Insight",
            href: "#",
            dropdown: [
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blogs" },
                { name: "Career", href: "/careers" },
            ],
        },
        { name: "Industries", href: "/industries" },
        { name: "Contact", href: "/contact-us" },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-blue-600 " : "bg-transparent"}`}>
            <div className="lg:container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/">
                    <img src="/site-logo.png" alt="" className= ' h-10 lg:h-8 xl:h-10' />
                </a>

                <div className="hidden lg:flex lg:space-x-1 space-x-6 text-white font-medium relative">
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
                                    className="flex items-center gap-1 lg:px-2 xl:px-4  py-2 rounded-md hover:bg-white/10 transition"
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
                                </Link>
                            )}

                            {item.dropdown && (
                                item.name === "Staff Augmentation" && typeof item.dropdown === "object" && item.dropdown.columns ? (
                                    <div className={`absolute left-0 top-full mt-2 bg-white rounded-md shadow-xl z-50 transition-all duration-300 ${openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                        <div className="flex p-6 gap-6 lg:w-[600px] xl:w-[700px] max-w-full">


                                            <div className="flex-grow grid grid-cols-3 gap-6">
                                                {item.dropdown.columns.map((column, colIndex) => (
                                                    <div key={colIndex}>
                                                        <ul className="space-y-2">
                                                            {column.items.map((link) => (
                                                                <li key={link.name}>
                                                                    <a
                                                                        href={link.href}
                                                                        onClick={(e) => {
                                                                            if (link.href.startsWith("#")) {
                                                                                e.preventDefault();
                                                                                handleLinkClick(link.href);
                                                                            }
                                                                            setOpenDropdown(null);
                                                                        }}
                                                                        className="block text-sm text-gray-700 hover:text-blue-600 transition"
                                                                    >
                                                                        {link.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
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
                                                    item.dropdown.map((subItem) => (
                                                        <div key={subItem.name} className="flex flex-col items-center text-center">
                                                            <Link
                                                                to={subItem.href}
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
                                                    item.dropdown.map((subItem) =>
                                                        subItem.href.startsWith("/") ? (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.href}
                                                                onClick={() => setOpenDropdown(null)}
                                                                className="block px-4 py-2 text-black rounded hover:bg-blue-100 hover:text-blue-600 text-sm font-medium transition"
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
                                                                    setOpenDropdown(null);
                                                                }}
                                                                className="block px-4 py-2 text-black rounded hover:bg-blue-100 hover:text-blue-600 text-sm font-medium transition"
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        )
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
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
                <div className="lg:hidden absolute top-full left-0 right-0 transform transition-transform duration-300 flex flex-col bg-gray-100 border-t border-white/20 shadow-md px-5 py-4 z-40 text-white space-y-4">
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
                                            {item.name === "Staff Augmentation" && item.dropdown.columns ? (
                                                <>
                                                    {item.dropdown.columns.map((col, index) => (
                                                        <div key={index} className="space-y-1">
                                                            {col.items.map((link) => (
                                                                <a
                                                                    key={link.name}
                                                                    href={link.href}
                                                                    onClick={(e) => {
                                                                        if (link.href.startsWith("#")) {
                                                                            e.preventDefault();
                                                                            handleLinkClick(link.href);
                                                                        }
                                                                        setMenuOpen(false);
                                                                        setOpenDropdown(null);
                                                                    }}
                                                                    className="block text-sm text-black hover:text-blue-500"
                                                                >
                                                                    {link.name}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    ))}
                                                    <Link
                                                        to={item.dropdown.cta.href}
                                                        onClick={() => {
                                                            setMenuOpen(false);
                                                            setOpenDropdown(null);
                                                        }}
                                                        className="block mt-2 text-sm text-blue-600 underline"
                                                    >
                                                        {item.dropdown.cta.title}
                                                    </Link>
                                                </>
                                            ) : (
                                                item.dropdown.map((subItem) =>
                                                    subItem.href.startsWith("/") ? (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.href}
                                                            onClick={() => {
                                                                setMenuOpen(false);
                                                                setOpenDropdown(null);
                                                            }}
                                                            className="block hover:text-blue-500"
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
                                                            className="block hover:text-blue-500"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    )
                                                )
                                            )}
                                        </div>
                                    )}
                                </>
                            ) : item.href.startsWith("/") ? (
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
                            )}
                        </div>
                    ))}
                </div>
            )}


        </header>
    );
}

export default Header;
