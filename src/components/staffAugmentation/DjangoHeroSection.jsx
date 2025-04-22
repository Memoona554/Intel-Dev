import React from 'react'
const stats = [
    {
        number: '7+',
        label: 'Years of IT Excellence',
    },
    {
        number: '10+',
        label: 'Developer Team',
    },
    {
        number: '100+',
        label: 'Completed Projects',
    },
];
function DjangoHeroSection() {
    return (
        <>
            <section className="bg-white py-36 lg:py-48 bg-center  px-4 bg-no-repeat bg-cover" style={{
                backgroundImage: "url('/django-bg.webp')",

            }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
                    <div>


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hire Django Developers
                        </h1>

                        <p className="text-white mb-6">
                            Hire experienced Django developers to build secure, efficient, and innovative web solutions tailored to your business needs. Our team delivers high-quality development that drives performance and supports your digital goals.
                        </p>
                        <a
                            href="#calendly"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-10 py-3 rounded-full transition duration-300"
                        >
                            HIRE DJANGO DEVELOPER NOW
                        </a>
                    </div>

                    <div></div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container  mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
                    <h2 className="text-3xl sm:text-4xl  mb-10">
                        <strong>Expertise that help you reach your</strong>
                        <br />
                        business goals faster
                    </h2>

                    <section className="w-full bg-white py-12">
                        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className=" rounded-lg p-6 flex flex-col items-center justify-center"
                                >
                                    <h3 className="text-4xl font-bold text-blue-600">{stat.number}</h3>
                                    <p className="mt-2 text-gray-700 text-lg leading-tight whitespace-pre-line">
                                        {stat.label}
                                    </p>
                                    <div className="w-16 h-[1px] bg-gray-300 mt-4" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default DjangoHeroSection