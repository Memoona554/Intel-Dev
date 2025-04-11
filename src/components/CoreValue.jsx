import React from 'react'
import { FaChartBar } from "react-icons/fa"; // import your icon


function CoreValue() {
    return (
        <>
            <section class="bg-yellow-400 py-16" data-aos="fade-up" data-aos-delay="100">
                <h1 className='text-4xl text-center mb-4 font-bold lg:text-6xl'>CORE VALUES</h1>
                <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="relative bg-cyan-700 text-white p-8 rounded-lg  flex flex-col justify-between ">
                        <p className="text-lg lg:text-xl  mb-6 w-[60%] lg:w-[60%] ml-auto">
                            We ensure that every engagement, whether with clients, partners, or team members,
                            delivers meaningful and impactful value.
                        </p>

                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 w-full ">
                            VALUE-DRIVEN<br />ENGAGEMENTS
                        </h3>

                        <div className="flex justify-start mb-6">
                            <FaChartBar size={50} className="text-white" />
                        </div>

                        <span className="absolute bottom-0 text-cyan-600 -right-6 text-[9rem] font-bold  select-none">
                            E
                        </span>
                    </div>
                    <div class="relative bg-rose-700 text-white p-8 rounded-lg  flex flex-col justify-between">
                        <p className="text-lg lg:text-xl  mb-6 w-[60%] lg:w-[60%] ml-auto">
                            We strive for excellence, rejecting mediocrity, and consistently delivering the best possible outcomes without chasing unattainable perfection.
                        </p>

                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 w-full ">
                            NO<br />MEDIOCRITY
                        </h3>

                        <div className="flex justify-start mb-6">
                            <FaChartBar size={50} className="text-white" />
                        </div>

                        <span className="absolute bottom-0 text-rose-600 z-20 -right-6 text-[9rem] font-bold  select-none">
                            M
                        </span>

                    </div>

                    <div class="relative bg-purple-700 text-white p-8 rounded-lg ">
                    <p className="text-lg lg:text-xl  mb-6 w-[60%] lg:w-[60%] ml-auto">
                    We ensure that every engagement, whether with clients, partners, or team members, delivers meaningful and impactful value.
                    </p>

                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 w-full ">
                        WORK IS FUN &<br />GROWTH
                        </h3>

                        <div className="flex justify-start mb-6">
                            <FaChartBar size={50} className="text-white" />
                        </div>

                        <span className="absolute bottom-0 text-purple-600 z-20 -right-6 text-[9rem] font-bold  select-none">
                            G
                        </span>
                        
                    </div>

                </div>
            </section>


        </>
    )
}

export default CoreValue