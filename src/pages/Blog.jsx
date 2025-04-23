import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Blog() {
    const blogs = [
        {
            title: "Desktop Application vs Web Application: Comparison",
            image: "/web-developer.webp",
            link: "/blog/desktop-vs-web",
            excerpt:
                "In the modern software landscape, many businesses go for software solutions to modernize their business strategies and enhance overall productivity. Are you unsure what is best for your business.....",
        },
        {
            title: "Mobile App Development: Innovations Driving 2024",
            image: "/mobile-development.jpg",
            link: "/blog/future-of-mobile-app-development",
            excerpt:
                "In today's interconnected global economy, it has become crucial for businesses to have an efficient and transparent supply chain...",
        },
        {
            title: "Exploring Blockchain Technology: Real-World Use Cases in 2024",
            image: "/blockchain-portfolio.webp",
            link: "/blog/exploring-blockchain-technology-real-world-use-cases-in-2024",
            excerpt:
                "In recent years, the landscape of cross platform mobile development has been revolutionized by cross-platform methodologies...",
        },
        {
            title: "Top 10 Programming Languages of the Future: An Overview",
            image: "/programing-blog.webp",
            link: "/blog/top-10-programming-languages-in-future",
            excerpt:
                "Technology drives a world that transforms every day. In this ever changing world, where competition is high, It’s important for businesses to embrace the languages and trends that drive innovation.…",
        },
        {
            title: "Top 12 Software Development Methodologies for Effective Project Management",
            image: "/software-method-blog.webp",
            link: "/blog/software-development-methodologies",
            excerpt:
                "As digital transformation accelerates, businesses are increasingly committed to developing scalable and feature-rich software solutions that address both internal and client challenges. If you're aiming...",
        },
        {
            title: "What is Enterprise Application Development? The Definitive Guide",
            image: "/erp-heading.webp",
            link: "/blog/what-is-enterprise-application",
            excerpt:
                "In today's competitive environment, maintaining efficient and accessible services and systems is Intel Devs for smooth operations. That is why enterprise applications are essential for large companies. They...",
        },
    ];

    return (
        <>
            <Header />
            <section className="w-full bg-white py-28 px-6 md:px-20 bg-no-repeat" style={{
                backgroundImage: "url('/blog-bg.webp')",

            }}>
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug text-white">
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

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
                                <Link
                                    to={blog.link}
                                    className="text-[#0274be] text-sm font-semibold hover:underline"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};


export default Blog