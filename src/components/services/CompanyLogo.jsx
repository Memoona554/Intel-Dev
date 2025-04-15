import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function CompanyLogo() {
  return (
    <>
    <h1 className='lg:text-3xl text-center py-10 font-bold'>Our Precious Clients  </h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper span swiper w-full"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
          <SwiperSlide key={num}>
            <div className="relative mr-2 " data-aos="fade-up"
              data-aos-delay="400">
              <img
                loading="lazy"
                src={`/com_${num}.jpeg`}
                alt={`Company ${num}`}
                className="w-full h-50 lg:h-40 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CompanyLogo;
