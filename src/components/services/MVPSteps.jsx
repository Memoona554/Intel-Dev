import React from "react";

const steps = [
    {
        step: "Step 1",
        title: "Discovery & Ideation (Sprints 1–2)",
        objectives: [
            "Discover the Project’s Foundation and MVP Feature List",
            "Establish Project Requirements",
        ],
        deliverables: [
            "Product strategy, roadmap & wireframes",
            "Payment upon acceptance of sprint 1 deliverables",
        ],
        image: "/mvp-1.png",
    },
    {
        step: "Step 2",
        title: "Strategy and Design (Sprints 3–4)",
        objectives: [
            "UX/UI strategy, Prototyping and Feedback",
            "Finalize Design Components",
        ],
        deliverables: [
            "Clickable prototypes",
            "Payment upon approval of sprint 3-4 deliverables",
        ],
        image: "/mvp-2.png",
    },
    {
        step: "Step 3",
        title: "Development and Launch (Sprints 5–12)",
        objectives: [
            "Build MVP Features",
            "Testing and Feedback Implementation",
        ],
        deliverables: [
            "Functional MVP",
            "Payment upon approval of final sprint",
        ],
        image: "/mvp-3.png",
    },
    {
        step: "Ongoing",
        title: "Product Support and Enhancement",
        objectives: [
            "Monitor Feedback",
            "Deploy Enhancements and Fixes",
        ],
        deliverables: [
            "Ongoing maintenance",
            "Monthly retainer based on support scope",
        ],
        image: "/mvp-4.png",
    },
];

const MvpSteps = () => {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
                        Achieve Continuous <span className="text-blue-600">Progress</span> and{" "}
                        <span className="text-blue-600">Product Maturity</span> with Clear Sprint Milestones
                    </h2>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="mb-16">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className={`${index % 2 === 0 ? "order-1" : "order-2"}`}>
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="rounded-lg shadow-md w-full object-cover"
                                        />
                                    </div>

                                    <div
                                        className={`bg-white relative shadow-xl rounded-xl  border border-blue-100 ${index % 2 === 0 ? "order-2" : "order-1"
                                            }`}
                                    >
                                        <div className=" top-0 left-0 right-0 h-4 bg-blue-600 "></div>

                                        <div className=" flex items-center gap-2 mb-2 p-6">

                                            <div className="text-blue-600 text-2xl">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 16h-1v-4h-1m1-4h.01M12 18.5C6.477 18.5 2 14.023 2 8.5S6.477-1.5 12-1.5 22 3.977 22 9.5 17.523 18.5 12 18.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-blue-700 font-semibold text-lg">
                                                {step.step}
                                            </h3>
                                        </div>

                                        <h4 className="text-xl font-bold text-gray-900 mb-4 p-6">
                                            {step.title}
                                        </h4>

                                        <div className="mb-4 p-6">
                                            <h5 className="text-sm text-gray-500 font-semibold">Objectives:</h5>
                                            <ul className="list-disc list-inside text-gray-700">
                                                {step.objectives.map((obj, i) => (
                                                    <li key={i}>{obj}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="text-sm text-gray-500 font-semibold px-6">Deliverables:</h5>
                                            <ul className="list-disc list-inside text-gray-700 px-6">
                                                {step.deliverables.map((del, i) => (
                                                    <li key={i}>{del}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
            </section>
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Headline 1 */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                        Accelerate Your MVP Launch
                    </h2>

                    {/* Headline 2 */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-8">
                        Bring Your Product to Market with Confidence
                    </h2>

                    {/* CTA Button */}
                    <a
                        href="#next-step"
                        className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Take the Next Step
                    </a>
                </div>
            </section>
        </>
    );
};

export default MvpSteps;
