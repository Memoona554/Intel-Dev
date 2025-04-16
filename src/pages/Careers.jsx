import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import BookConsultation from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Careers() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    }, []);
    const jobs = [
        {
            title: 'Latest Jobs',
            location: 'Remote · Hybrid . Full Time',
            linkedin: 'https://se.linkedin.com/company/inteldevs?trk=public_profile_topcard-current-company',
        },
       
    ];
    return (
        <>
            <Header>
            </Header>
            <section className="bg-white py-20 bg-no-repeat" style={{
      backgroundImage: "url('/career-bg.webp')",

    }}>
                <div className="container mx-auto  px-4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl text-white font-bold leading-snug">
                            Latest Happenings
                            <br /> At A Glance
                        </h1>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            <span>
                                <span>
                                    <Link to="/" className="text-blue-600 hover:underline">
                                        Home
                                    </Link>
                                </span>{' '}
                                »{' '}
                                <span className="text-white font-medium" aria-current="page">
                                    Careers
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Latest Job Openings</h2>
                    <div className="grid grid-cols-1 text-center max-w-3xl mx-auto gap-6">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                                    <p className="text-sm text-gray-500">{job.location}</p>
                                </div>
                                <a
                                    href={job.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-blue-600 hover:underline font-medium"
                                >
                                    View on LinkedIn →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BookConsultation />
            <Footer />
        </>
    )
}

export default Careers