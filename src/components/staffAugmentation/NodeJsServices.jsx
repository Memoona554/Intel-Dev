import React from "react";

const services = [
    {
        title: "Node Js Web Development",
        description:
            "Being a highly effective framework for web development, Node Js helps in building high performance web apps at an accelerated pace. Partner with Intel Devs to build reliable and scalable web applications tailored to your business needs.",
    },
    {
        title: "Node Js Mobile Development",
        description:
            "Create responsive and feature-rich mobile applications using Node Js and extend your reach to mobile users efficiently. Our proficient Node Js developers build customer-centric mobile apps, helping you deliver a superior user experience across devices.",
    },
    {
        title: "Plugin Development",
        description:
            "Our developers create custom Node Js plugins that seamlessly integrate with your system, enhancing the performance and functionality of your crucial business applications. Partner with Intel Devs to customize and enhance your apps with bespoke plugins.",
    },
    {
        title: "API Development & Integration",
        description:
            "Hire our Node Js developers to build robust APIs and ensure seamless integration with third-party services to extend existing business functionalities. Streamline communication between different components with our Node Js services.",
    },
    {
        title: "App Migration",
        description:
            "Seamlessly migrate your backend applications to Node Js for faster, secure and improved request processing and outputs, without any data loss. Our experts ensure a smooth transition, minimizing downtime and maximizing the benefits of Node Js.",
    },
    {
        title: "Maintenance & Support",
        description:
            "Ensure the continuous health and performance of your Node Js applications with our reliable maintenance and support services. Our developers take care of your applications by optimizing performance, fixing bugs, and adding more features and functionalities.",
    },
];

const NodeJsServices = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Our Future-Forward Node Js <br /> Development Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    Unlock the potential of Node Js with our comprehensive range of development
                    services designed for an engaging and efficient digital experience.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-full shadow-md p-8 text-center border border-gray-200"
                        >
                            <div className="w-10 h-10 mx-auto mb-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="106" viewBox="0 0 106 106" fill="none"><g filter="url(#filter0_d_4924_4445)"><rect x="12" y="12" width="82" height="82" rx="41" fill="white"></rect></g><rect x="21" y="21" width="64" height="64" rx="32" fill="#2169F7"></rect><path d="M64.8402 57.4586L66.7351 56.0821C67.8663 55.2597 68.3355 53.8137 67.9046 52.4827L67.1804 50.2562C67.0499 49.8528 67.0499 49.4267 67.1804 49.0245L67.9046 46.7968C68.3367 45.4658 67.8663 44.0198 66.7351 43.1986L64.8402 41.822C64.4979 41.5731 64.2477 41.2283 64.116 40.8255L63.393 38.5973C62.9597 37.2674 61.7292 36.3738 60.3311 36.3738H57.9897C57.566 36.3738 57.1602 36.2422 56.8178 35.9932L54.9241 34.6166V34.616C53.7918 33.7948 52.271 33.7943 51.1398 34.6166L49.2449 35.9932C48.902 36.2422 48.4974 36.3738 48.0736 36.3738H45.7317C44.333 36.3738 43.1024 37.2674 42.6703 38.5979L41.9467 40.8255C41.8162 41.2277 41.5654 41.5725 41.2225 41.822L39.3282 43.198C38.1965 44.0204 37.7266 45.4664 38.1587 46.7968L38.8823 49.0239C39.0134 49.4267 39.0134 49.8528 38.8823 50.2562L38.1587 52.4833C37.7266 53.8125 38.1965 55.2585 39.3282 56.0821L41.2231 57.4586C41.5655 57.7076 41.8162 58.0524 41.9467 58.4546L42.2685 59.4453L38.6629 65.3856C38.3066 65.9734 38.2948 66.674 38.6273 67.2737C38.9657 67.8675 39.5713 68.2238 40.2601 68.2297L43.3654 68.2356L44.8082 70.9906C45.1229 71.6022 45.7226 71.9762 46.4054 72H46.4707C47.1298 72 47.7176 71.6675 48.0619 71.0975L51.7627 65.0079C52.1685 65.183 52.5987 65.2799 53.0317 65.2799C53.4661 65.2799 53.8978 65.1825 54.3049 65.0061L58.0013 71.0975C58.3457 71.6675 58.9394 72 59.5985 72H59.6579C60.3407 71.9762 60.9404 71.6022 61.2551 70.9966L62.6979 68.2356L65.8091 68.2297C66.4919 68.2238 67.0976 67.8675 67.436 67.2737C67.7685 66.674 67.7566 65.9734 67.4004 65.3856L63.7947 59.4453L64.116 58.4558C64.2477 58.0512 64.4979 57.7064 64.8402 57.4586ZM47.0169 70.4622C46.8388 70.7531 46.5538 70.7709 46.4469 70.7769C46.3341 70.7709 46.0491 70.7294 45.8947 70.4265L44.2857 67.339C44.1788 67.1372 43.971 67.0125 43.7394 67.0125L40.2601 67.0006C39.9216 67.0006 39.7554 66.7691 39.696 66.674C39.6426 66.5731 39.5357 66.3119 39.7079 66.0209L42.7838 60.9556C43.2881 62.1302 44.4331 62.9063 45.7317 62.9063H48.0736C48.4968 62.9063 48.902 63.0379 49.2449 63.2869L50.7235 64.3611L47.0169 70.4622ZM51.8604 63.6724L49.9649 62.2958C49.4113 61.8936 48.7571 61.6805 48.0736 61.6805H45.7317C44.8656 61.6805 44.1037 61.1275 43.8362 60.304L43.1126 58.0763C42.9013 57.4252 42.4967 56.8685 41.9431 56.4675L40.0488 55.091C39.348 54.581 39.0571 53.6851 39.3246 52.8615L40.0482 50.6345C40.2595 49.9833 40.2595 49.2956 40.0482 48.6456L39.3246 46.4186C39.0571 45.5944 39.348 44.6991 40.0488 44.1898L41.9431 42.8132C42.4967 42.411 42.9013 41.8544 43.1126 41.2038L43.8362 38.9762C44.1037 38.1526 44.8656 37.5996 45.7317 37.5996H48.0736C48.7577 37.5996 49.4125 37.3871 49.9655 36.9843L51.8604 35.6083C52.5607 35.0996 53.5021 35.0996 54.2035 35.6083L56.0972 36.9843C56.6503 37.3871 57.305 37.5996 57.9897 37.5996H60.3311C61.1977 37.5996 61.959 38.1532 62.2271 38.9762L62.9501 41.205C63.1632 41.8562 63.5678 42.4122 64.1196 42.8132L66.0145 44.1904C66.7148 44.6985 67.0056 45.5945 66.7387 46.418L66.0145 48.6457C65.8038 49.2956 65.8026 49.9833 66.0145 50.6351L66.7387 52.8616C67.0056 53.6857 66.7148 54.5811 66.0145 55.091L64.1196 56.4675C63.5678 56.8673 63.1632 57.424 62.9501 58.0763L62.2271 60.304C61.959 61.1275 61.1977 61.6805 60.3311 61.6805H57.9897C57.3062 61.6805 56.6515 61.8936 56.0972 62.2958L54.2035 63.6724C53.5021 64.1799 52.5607 64.1799 51.8604 63.6724ZM66.3673 66.674C66.3079 66.7691 66.1476 67.0006 65.8032 67.0006L62.3238 67.0125C62.0923 67.0125 61.8844 67.1372 61.7835 67.339L60.1685 70.4266C60.0141 70.7294 59.7351 70.7709 59.6222 70.7769C59.5035 70.7709 59.2244 70.7531 59.0463 70.4622L55.3436 64.3585L56.8178 63.2869C57.1614 63.0379 57.566 62.9063 57.9897 62.9063H60.3311C61.6292 62.9063 62.7742 62.1311 63.2794 60.9555L66.3554 66.0209C66.5276 66.3119 66.4207 66.5731 66.3673 66.674ZM53.0317 61.5812C46.4475 61.5812 41.0908 56.2245 41.0908 49.6398C41.0908 43.0556 46.4475 37.6989 53.0317 37.6989C59.6164 37.6989 64.9731 43.0556 64.9731 49.6398C64.9731 56.2245 59.6164 61.5812 53.0317 61.5812ZM53.0317 38.9247C47.1232 38.9247 42.3166 43.7313 42.3166 49.6398C42.3166 55.5482 47.1232 60.3554 53.0317 60.3554C58.9401 60.3554 63.7473 55.5482 63.7473 49.6398C63.7473 43.7313 58.9401 38.9247 53.0317 38.9247ZM49.5555 56.6986C49.1617 56.6986 48.7703 56.5753 48.4351 56.3311C47.8366 55.8966 47.5457 55.1748 47.6768 54.4458L48.1933 51.5747L46.0878 49.5554C45.5539 49.0436 45.3642 48.2883 45.5928 47.5851C45.8214 46.8818 46.4188 46.3827 47.1513 46.2821L50.0415 45.8865L51.3116 43.2597C51.6335 42.5941 52.2931 42.18 53.0323 42.18H53.0329C53.7726 42.1806 54.431 42.5941 54.753 43.2597V43.2603L56.023 45.8865L58.9138 46.2821C59.6452 46.3827 60.2425 46.8812 60.4711 47.5845C60.6997 48.2877 60.5106 49.043 59.9779 49.5554L57.8712 51.5747L58.3883 54.4458C58.5188 55.1748 58.2279 55.8966 57.6294 56.3311C57.0309 56.7668 56.2528 56.8195 55.6029 56.4687L53.0323 55.091L50.4611 56.4687C50.175 56.6231 49.8644 56.6986 49.5555 56.6986ZM53.0323 43.4057C52.7629 43.4057 52.5325 43.5505 52.4152 43.7935L51.0021 46.716C50.913 46.9004 50.737 47.0285 50.5335 47.0566L47.3177 47.4971C47.0508 47.5336 46.8419 47.7078 46.7587 47.9639C46.6755 48.2201 46.742 48.484 46.9365 48.6708L49.279 50.9176C49.4269 51.0594 49.4945 51.2665 49.458 51.4682L48.8834 54.6636C48.8355 54.9282 48.9373 55.1807 49.1551 55.3399C49.3736 55.4979 49.6447 55.5171 49.8817 55.389L52.7426 53.8556C52.9234 53.7575 53.1412 53.7575 53.322 53.8556L56.1822 55.389C56.4168 55.5159 56.6922 55.4991 56.9088 55.3399C57.1279 55.1807 57.2296 54.9282 57.1817 54.6624L56.6072 51.4682C56.5713 51.2665 56.6383 51.0594 56.7867 50.9176L59.1293 48.6708C59.3232 48.4846 59.389 48.2201 59.3052 47.9639C59.2227 47.7078 59.0132 47.5336 58.7474 47.4971L55.5311 47.0566C55.3288 47.0285 55.1528 46.901 55.063 46.716L53.6494 43.7935V43.7929C53.532 43.5505 53.3016 43.4063 53.0329 43.4057H53.0323Z" fill="white"></path><defs><filter id="filter0_d_4924_4445" x="0" y="0" width="106" height="106" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"></filter></defs></svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="#calendly"
                        className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition"
                    >
                        DISCUSS YOUR PROJECT
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NodeJsServices;
