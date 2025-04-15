import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SecuritySubscriptionSection = () => {
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
        <section className=" py-16 px-4 md:px-12 lg:px-24" style={{
            backgroundImage: "url('/sdaas-bg.webp')",

        }}>
            <div data-aos="fade-up" data-aos-delay="100" className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
                        Subscription-Based SecOps Team
                    </h1>
                    <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-white">
                        Start Today, Cancel Anytime
                    </h1>
                    <h1 className="text-xl lg:text-3xl font-medium mb-6 text-white">
                        Advanced <span className="text-blue-500">Protection</span> For{" "}
                        <span className="text-blue-500">Cybersecurity Threats</span> with Optimized{" "}
                        <span className="text-blue-500">SecOps</span> Subscription Plans
                    </h1>
                    <p className="text-white mb-6">
                        Prevention-First Security: 95% Reduction in Hacking Attempts Within 3 Months
                    </p>

                    <a
                        href="#calendly"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
                    >
                        Schedule Your Free Consultation
                    </a>
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

export default SecuritySubscriptionSection;
