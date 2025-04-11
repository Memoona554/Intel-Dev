import React from 'react'
import Header from '../components/Header'
import IndustryHeroSection from '../components/IndustryHeroSection'
import IndustryList from '../components/Industries'
import RecognitionAwards from '../components/RecognitionAwards'
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Industry() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
        });
      }, []);
    return (
        <>
            <Header />
            <IndustryHeroSection />
            <IndustryList />
            <div className="w-full  mx-auto md:w-1/3 px-4 mb-6 py-10" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                    <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <g clip-path="url(#clip0_1114_4841)">
                                <path d="M11.2727 11.916C8.54188 11.916 6.32031 14.1377 6.32031 16.8684C6.32031 19.5991 8.54196 21.8207 11.2727 21.8207C14.0034 21.8207 16.225 19.599 16.225 16.8684C16.225 14.1377 14.0034 11.916 11.2727 11.916ZM11.2727 20.6464C9.18954 20.6464 7.49469 18.9517 7.49469 16.8685C7.49469 14.7852 9.18946 13.0905 11.2727 13.0905C13.3559 13.0905 15.0506 14.7852 15.0506 16.8685C15.0506 18.9517 13.3559 20.6464 11.2727 20.6464Z" fill="#2169F7" />
                                <path d="M13.642 15.3979C13.4158 15.1658 13.0441 15.1611 12.8116 15.3873L10.7886 17.3592L9.966 16.553C9.73436 16.3262 9.36272 16.3298 9.13561 16.5613C8.90865 16.793 8.91232 17.1647 9.14389 17.3917L10.3764 18.5996C10.6042 18.8229 10.9687 18.8234 11.1973 18.6008L13.6314 16.2283C13.8636 16.0019 13.8683 15.6301 13.642 15.3979Z" fill="#2169F7" />
                            </g>
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">On-Demand Services</h3>
                    <p className="text-sm text-gray-600">Vaival distinguishes itself as the go-to company for designing and developing on-demand mobile applications for its clients. Our seasoned experts in the domain of on-demand app development services help you not just sustain but achieve great success.</p>
                </div>
            </div>

            <RecognitionAwards/>
            <BookConsultation/>
            <Footer/>
        </>
    )
}

export default Industry