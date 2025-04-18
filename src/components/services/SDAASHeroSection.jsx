import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SDAASHeroSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",     // from EmailJS
            "YOUR_TEMPLATE_ID",    // from EmailJS
            form.current,
            "YOUR_PUBLIC_KEY"      // from EmailJS
        )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Something went wrong!");
                }
            );
    };
    return (
        <section className="bg-white py-32 bg-cover lg:py-24 px-6 bg-no-repeat" style={{
            backgroundImage: "url('/sdaas-bg.webp')",

        }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" data-aos="fade-up" data-aos-delay="100">
                <div className="space-y-6 py-7">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white" data-aos="fade-up" data-aos-delay="300">
                        Unlimited Software Development for Startups and SMEs
                    </h1>
                    <p className="text-white text-lg" data-aos="fade-up" data-aos-delay="300">
                        Deliver exceptional software experiences with fast, responsive, and highly scalable development solutions.
                    </p>

                    <ul className="space-y-3 text-white" data-aos="fade-up" data-aos-delay="400">
                        {[
                            "Access to top talent without the hassle",
                            "Cost-effective development solutions without compromising quality.",
                            "Reduced overhead costs of hiring in-house developers.",
                            "Clear and transparent pricing to prevent unexpected costs.",
                            "7-day free trial",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="text-green-600 mr-2 mt-1">
                                    <i className="fas fa-check" aria-hidden="true"></i>
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#calendly"
                        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition"
                    >
                        Schedule a Call
                    </a>

                    <p className="hidden">7-Day Free Trial | 100% Money Back Guarantee</p>

                   
                </div>

                <div className=" p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
                    <p className="text-2xl font-semibold text-white mb-4 italic">Discuss Your Project Needs</p>
                    <p className="text-white mb-4">Please fill the below information and we’ll get back to you as soon as possible.</p>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <input
                            type="text"
                            name="your-name"
                            placeholder="Your Name"
                            className="w-full p-3 border text-black bg-white border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="your-email"
                            placeholder="Your Email"
                            className="w-full p-3 text-black bg-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Contact"
                            className="w-full p-3 text-black bg-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            name="your-message"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full p-3 text-black bg-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                        >
                            SUBMIT NOW
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SDAASHeroSection;
