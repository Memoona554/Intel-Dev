import React from "react";
import { Link } from "react-router-dom";

const StaffAugmentationHero = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div>
          {/* Breadcrumbs */}
          <p className="text-sm text-gray-500 mb-2">
            <span><Link to="/" className="text-blue-500 hover:underline">Home</Link></span> &raquo;{" "}
            <span className="text-gray-700">Staff Augmentation</span>
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quickest Way to Hire Remote Software Developers
          </h1>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            Utilize our IT staff augmentation services to tap into a pool of certified software engineers and IT experts. We enable you to seamlessly expand your team as needed, ensuring access to top talent without straining your financial resources.
          </p>

          {/* Button */}
          <a
            href="#calendly"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Start Hiring
          </a>
        </div>

        {/* Right Column - Contact Form (Hidden on all devices like Elementor) */}
        <div className="hidden">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Request for Proposal</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please fill the below information and we’ll get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              name="your-name"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              name="your-email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Contact"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
            <textarea
              name="your-message"
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationHero;
