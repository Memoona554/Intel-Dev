import React from "react";

const CompanyIntro = () => {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto flex gap-10 flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="md:w-1/2 lg:w-[30%] mb-10 md:mb-0" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://www.vaival.com/wp-content/uploads/2025/01/Group-65.png"
              alt="Vaival"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="md:w-1/2 lg:w-[70%]  justify-end flex-col flex space-y-6 text-center md:text-left" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col lg:w-[60%] mx-auto">
              <h2 className="hidden">Hello World</h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to <span className="font-semibold">Vaival</span>, where we
                distinguish ourselves by our commitment to deliver exceptional
                services to our customers for software development and consultancy.
                We are dedicated to precision and excellence, and our exceptional
                services in web3 & blockchain, dev-ops, design innovation and
                consultancy sets us apart from the rest of the industry.
              </p>

              <h2 className="text-2xl font-bold text-blue-800">Muhammad Majid Ali</h2>
              <h3 className="text-xl text-gray-600">Founder, Vaival Technologies</h3>

              {/* Icon Row */}
              {/* <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 27 40"
    fill="none"
    className="text-blue-600"
  >
    <path
      d="M13.3578 3.12527C12.9258 3.12214 12.5735 3.4698 12.5703 3.90105C12.5672 4.3323 12.9141 4.68464 13.3461 4.68777C13.7774 4.69089 14.1297 4.34402 14.1328 3.91277C14.136 3.48152 13.7891 3.12917 13.3578 3.12527Z"
      fill="#2169F7"
    />
    <path
      d="M13.3224 7.81288C10.3059 7.79148 7.83547 10.225 7.81266 13.2406C7.78992 16.2559 10.2248 18.7275 13.2403 18.7503C13.2543 18.7503 13.2682 18.7504 13.2822 18.7504C16.2785 18.7504 18.7274 16.3242 18.75 13.3226C18.7728 10.3073 16.338 7.83562 13.3224 7.81288ZM13.282 17.188C13.2722 17.188 13.2619 17.1879 13.252 17.1878C11.0981 17.1716 9.35883 15.4061 9.37508 13.2523C9.39125 11.1081 11.1403 9.37515 13.2806 9.37515C13.2905 9.37515 13.3008 9.37523 13.3106 9.37531C15.4646 9.39156 17.2038 11.157 17.1876 13.3109C17.1713 15.455 15.4224 17.188 13.282 17.188Z"
      fill="#2169F7"
    />
    <path
      d="M16.691 3.71774C16.2845 3.57352 15.8377 3.78641 15.6935 4.19313C15.5494 4.59985 15.7623 5.04633 16.1689 5.19055C19.6101 6.41016 21.9035 9.68759 21.876 13.346C21.8728 13.7774 22.2199 14.1298 22.6514 14.1331C22.6533 14.1331 22.6553 14.1331 22.6574 14.1331C23.086 14.1331 23.4352 13.7871 23.4385 13.3577C23.471 9.03368 20.7593 5.15969 16.691 3.71774Z"
      fill="#2169F7"
    />
  </svg>
</div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="container mx-auto flex gap-10 flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="md:w-1/2 lg:w-[70%]  justify-end flex-col flex space-y-6 text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col lg:w-[60%] mx-auto">
              <h2 className="hidden">Hello World</h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to <span className="font-semibold">Vaival</span>, where we
                distinguish ourselves by our commitment to deliver exceptional
                services to our customers for software development and consultancy.
                We are dedicated to precision and excellence, and our exceptional
                services in web3 & blockchain, dev-ops, design innovation and
                consultancy sets us apart from the rest of the industry.
              </p>

              <h2 className="text-2xl font-bold text-blue-800">Muhammad Majid Ali</h2>
              <h3 className="text-xl text-gray-600">Founder, Vaival Technologies</h3>

              {/* Icon Row */}
              {/* <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 27 40"
    fill="none"
    className="text-blue-600"
  >
    <path
      d="M13.3578 3.12527C12.9258 3.12214 12.5735 3.4698 12.5703 3.90105C12.5672 4.3323 12.9141 4.68464 13.3461 4.68777C13.7774 4.69089 14.1297 4.34402 14.1328 3.91277C14.136 3.48152 13.7891 3.12917 13.3578 3.12527Z"
      fill="#2169F7"
    />
    <path
      d="M13.3224 7.81288C10.3059 7.79148 7.83547 10.225 7.81266 13.2406C7.78992 16.2559 10.2248 18.7275 13.2403 18.7503C13.2543 18.7503 13.2682 18.7504 13.2822 18.7504C16.2785 18.7504 18.7274 16.3242 18.75 13.3226C18.7728 10.3073 16.338 7.83562 13.3224 7.81288ZM13.282 17.188C13.2722 17.188 13.2619 17.1879 13.252 17.1878C11.0981 17.1716 9.35883 15.4061 9.37508 13.2523C9.39125 11.1081 11.1403 9.37515 13.2806 9.37515C13.2905 9.37515 13.3008 9.37523 13.3106 9.37531C15.4646 9.39156 17.2038 11.157 17.1876 13.3109C17.1713 15.455 15.4224 17.188 13.282 17.188Z"
      fill="#2169F7"
    />
    <path
      d="M16.691 3.71774C16.2845 3.57352 15.8377 3.78641 15.6935 4.19313C15.5494 4.59985 15.7623 5.04633 16.1689 5.19055C19.6101 6.41016 21.9035 9.68759 21.876 13.346C21.8728 13.7774 22.2199 14.1298 22.6514 14.1331C22.6533 14.1331 22.6553 14.1331 22.6574 14.1331C23.086 14.1331 23.4352 13.7871 23.4385 13.3577C23.471 9.03368 20.7593 5.15969 16.691 3.71774Z"
      fill="#2169F7"
    />
  </svg>
</div> */}
            </div>
          </div>
          <div className="md:w-1/2 lg:w-[30%] mb-10 md:mb-0" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://www.vaival.com/wp-content/uploads/2025/01/Group-65.png"
              alt="Vaival"
              className="w-full h-auto object-contain"
            />
          </div>


        </div>
      </section>
    </>
  );
};

export default CompanyIntro;
