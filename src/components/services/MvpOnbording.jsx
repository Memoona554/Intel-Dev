import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const onboardingItems = [
  {
    title: "Documentation Creation",
    description:
      "We provide user guides, technical documentation, and a knowledge base for your MVP. These easy-to-follow resources help your team effectively manage and maintain the product after launch.",
  },
  {
    title: "Support and Check-Ins",
    description:
      "Regular follow-ups keep your team confident and aligned with the MVP. Any questions or challenges during onboarding are addressed promptly for a smooth process.",
  },
  {
    title: "Handover and Transfer",
    description:
      "Our structured documentation creates a smooth transition for your team, reducing the learning curve and helping them take full ownership of the product.",
  },
  {
    title: "Long-Term Success",
    description:
      "With ongoing support and updates, your team remains capable of scaling the MVP and adapting to new features, fostering continuous growth and product maturity.",
  },
];

export default function OnboardingSwiper() {
  return (
    <div className="w-full mt-10 px-4 py-5 bg-black">
      <h2 className="text-3xl md:text-4xl text-white p-4 font-bold text-center mb-6">
        Simplified Onboarding with Detailed Documentation and Ongoing Support
      </h2>
      <p className="text-center max-w-3xl mx-auto text-lg text-white mb-8">
        Our detailed documentation equips your team to fully understand, manage, and make the most of your MVP post-launch. From user guides to technical documentation, we provide continuous support and regular check-ins, promoting smooth onboarding and long-term success for your product.
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {onboardingItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 text-white rounded-2xl p-6  shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-base leading-relaxed ">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
