import React, { useState, useEffect } from "react";
import 'swiper/swiper-bundle.css';
import { Link } from "react-router-dom";
const slides = [
  {
    heading: "Build Decentralized Solutions with",
    highlight: "Blockchain Development Services",
    description:
      "We offer a wide range of reliable and tailored blockchain development services for your business. Build a decentralized blockchain network with Intel Devs to enhance transparency, efficiency, and automation.",
    buttonText: "Let’s Connect",
    buttonLink: "/contact-us",
  },
  {
    heading: "Scale Your In-House Team with",
    highlight: "IT Staff Augmentation Services",
    description: "Leverage our IT staff augmentation services to access a pool of certified software engineers and IT experts. Seamlessly expand your team as needed—without straining your financial resources.",
    buttonText: "Let’s Connect",
    buttonLink: "/contact-us",
  },
  {
    heading: "Embrace Excellence with Custom ",
    highlight: "Software Development Services",
    description:
    "Skill shortages shouldn't hold you back. Access specialized expertise through our IT Staff Augmentation Services and let us be your strategic partner in driving growth and achieving success.",
    buttonText: "Let’s Connect",
    buttonLink: "/contact-us",
  },

];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[98vh] relative  lg:bg-cover bg-no-repeat lg:bg-center"
      style={{
        backgroundImage: "url('/bannerimage.webp')",

      }}
    >

      <div className="w-full h-full bg-cover bg-center lg:pl-[10rem] flex items-center lg:justify-start justify-center text-white px-4">
        <div
          className={`absolute text-center lg:text-left max-w-3xl transition-opacity duration-500 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <h2 className="text-3xl lg:p-0 p-2 md:text-5xl font-bold mb-4">
            {slides[currentSlide].heading}{" "}
            <strong className="text-blue-400">{slides[currentSlide].highlight}</strong>
          </h2>
          <p className="text-lg lg:p-0 p-2 mb-6">{slides[currentSlide].description}</p>
          <Link
            to={slides[currentSlide].buttonLink}
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-600 transition"
          >
            {slides[currentSlide].buttonText}
          </Link>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
