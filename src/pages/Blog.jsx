import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Header from '../components/Header';
function Blog() {
    const blogs = [
        {
            title: "A Glimpse Into The Future Of Mobile App Development In 2024",
            date: "29, Jul 2024",
            author: "Sara Khalid",
            image: "/block-chain-bg.webp",
            excerpt:
                "We have seen mobile app development emerge and innovate in the past two decades. Over this course of time...",
        },
        {
            title: "Blockchain In Supply Chain: Transforming Operations",
            date: "29, Jul 2024",
            author: "Sara Khalid",
            image: "/blog_2.jpg",
            excerpt:
                "In today's interconnected global economy, it has become crucial for businesses to have an efficient and transparent supply chain...",
        },
        {
            title:
                "Cross Platform App Development Frameworks: Top 12 Picks For 2024",
            date: "05, Dec 2024",
            author: "Sara Khalid",
            image: "/blog_3.jpg",
            excerpt:
                "In recent years, the landscape of cross platform mobile development has been revolutionized by cross-platform methodologies...",
        },
    ];
    return (
        <>
            <Header />
            <section className="w-full bg-white py-20 px-6 md:px-20 bg-no-repeat" style={{
      backgroundImage: "url('/blog-bg.webp')",

    }}>
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
                        Expert Analysis & Insights on Tech
                        <br className="hidden md:block" />
                        <span className="text-white">
                            Explore Latest Trends, Innovations, and Guides
                        </span>
                    </h1>
                </div>
            </section>
            <section className="bg-white py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Expert <span className="text-black">Tech Blog</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5">
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                    <span className="flex items-center gap-1">
                                        <FaUser /> {blog.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MdDateRange /> {blog.date}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
                                <a
                                    href="#"
                                    className="text-[#0274be] text-sm font-semibold hover:underline"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};


export default Blog