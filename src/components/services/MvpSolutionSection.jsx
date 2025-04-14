import React from "react";

const solutions = [
    {
        title: "Startups",
        icon: "https://www.vaival.com/wp-content/uploads/2025/04/unnamed-removebg-preview.png",
        description:
            "For startups, we help turn innovative ideas into validated MVPs that attract early users and secure investment. Our services offer the flexibility to test, iterate, and scale quickly in a competitive market.",
        image: "https://www.vaival.com/wp-content/uploads/2025/04/Icons-04.png",
    },
    {
        title: "Growing Businesses",
        icon: "https://www.vaival.com/wp-content/uploads/2025/04/mid-sized-removebg-preview.png",
        description:
            "We assist scaling businesses in developing MVPs to test new product lines or enter new markets, helping you avoid costly missteps and speed up time-to-market.",
        image: "https://www.vaival.com/wp-content/uploads/2025/04/Icons-03.png",
    },
    {
        title: "Enterprises",
        icon: "https://www.vaival.com/wp-content/uploads/2025/04/enterprise-svgrepo-com.svg",
        description:
            "For enterprises, our MVP services provide an agile pathway to innovate and explore ideas internally without disrupting core operations, reducing development risk and promoting innovation.",
        image: "https://www.vaival.com/wp-content/uploads/2025/04/Icons-02.png",
    },
];

const MvpTimeline = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4">
                        Choose the{" "}
                        <span className="text-blue-600">MVP Development Solution</span> That Suits Your Business
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Whether you're a startup, a growing business, or an enterprise, our MVP development services are adaptable, cost-effective, and designed to help you quickly validate ideas, gather user feedback, and scale for future growth.
                    </p>
                </div>

                <div className="relative">

                    <div className="space-y-20">
                        {solutions.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center md:items-start md:justify-between ${!isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div className="md:w-5/12 w-full flex justify-center md:justify-end">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-80 object-contain drop-shadow-lg"
                                        />
                                    </div>


                                    <div className="md:w-5/12 w-full mt-8 md:mt-0 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start mb-3">
                                            <img
                                                src={item.icon}
                                                alt={`${item.icon} icon`}
                                                className="w-8 h-8 mr-3"
                                            />
                                            <h3 className="text-2xl font-semibold text-blue-700">{item.title}</h3>
                                        </div>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MvpTimeline;
