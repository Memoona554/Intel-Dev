import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const LegacyModernizationHeroSection = () => {
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
        <section className="bg-white text-gray-800 px-4 py-12 md:py-20 bg-no-repeat" style={{
            backgroundImage: "url('/sdaas-bg.webp')",

        }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center" data-aos="fade-up" data-aos-delay="100">
                <div>
                    <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight" data-aos="zoom-in" data-aos-delay="200">
                        Modernize Your Legacy Systems with{' '}
                        <span className="relative inline-block">
                            <span className="text-blue-600">Artificial Intelligence</span>
                        </span>{' '}
                        <br />
                        Without Causing Downtime or Disruption
                    </h1>
                    <p className="mt-6 text-lg text-white" data-aos="fade-down" data-aos-delay="300">
                        Improvise business operations and decision-making with advanced AI models for your legacy data structure.
                    </p>
                    <div className="mt-8" data-aos="fade-left" data-aos-delay="400"> 
                        <a
                            href="#calendly"
                            className="inline-block bg-white  px-6 py-3 rounded-xl shadow-md hover:text-white hover:bg-blue-600  transition"
                        >
                            Schedule Your Free Consultation
                        </a>
                    </div>
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

export default LegacyModernizationHeroSection;
