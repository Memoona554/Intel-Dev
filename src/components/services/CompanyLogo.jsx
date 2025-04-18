import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function CompanyLogo() {
  return (
    <>
      <h1 className='lg:text-3xl text-center py-10 font-bold'>
        Our Precious Clients
      </h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper lg:w-[80%] py-10 lg:mx-auto span swiper w-full"
      >
        {[1, 2, 3, 4, 5, 7, 8, 11].map((num) => (
          <SwiperSlide key={num}>
            <div
              className="relative mr-2 flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                loading="lazy"
                src={`/com_${num}.jpeg`}
                alt={`Company ${num}`}
                className="w-full h-50 lg:h-20 object-contain transition-all duration-300 hover:scale-105 drop-shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CompanyLogo;
