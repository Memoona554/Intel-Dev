import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const carouselItems = [
  {
    title: "Vulcan Forged",
    subtitle: "Web3 Gaming Ecosystem",
    image: "https://www.vaival.com/wp-content/uploads/2024/11/Rectangle-8701.png",
    points: [
      "Developed a diverse portfolio of 10+ blockchain games using AI to optimize legacy gaming engines.",
      "Supported the Top-5 NFT Marketplace with seamless AI integration for cross-chain trading.",
      "Enhanced token management with PYR and LAVA ecosystems, modernizing blockchain reward systems.",
      "Implemented AI features in VulcanDEX and Agora Marketplace, driving secure, automated trading.",
      "Introduced MyForge Dashboard, an AI-powered asset management platform, that boosts user engagement.",
    ],
  },
  {
    title: "Cartzy",
    subtitle: "SaaS Platform",
    image: "https://www.vaival.com/wp-content/uploads/2024/11/Group-57390.png",
    points: [
      "Achieved 40% faster growth through streamlined legacy system modernization, enabling rapid business expansion.",
      "Boosted efficiency by 60% with automated processes, reducing manual workload.",
      "Enhanced customer satisfaction by 25% with AI-driven personalization features.",
    ],
  },
  {
    title: "Meet Aimy",
    subtitle: "Web Application",
    image: "https://www.vaival.com/wp-content/uploads/2024/11/Group-1171275113.png",
    points: [
      "30% reduction in administrative tasks with AI-enhanced automation, optimizing legacy scheduling systems.",
      "Increased sales by 20% through personalized AI-powered customer interactions.",
      "Improved client loyalty by 25% with automated features and AI styling, modernizing customer service.",
    ],
  },
  {
    title: "SendPad",
    subtitle: "Customer Outreach Software",
    image: "https://www.vaival.com/wp-content/uploads/2024/11/Rectangle-8707.png",
    points: [
      "Boosted email open rates by 30% using AI-driven targeted campaigns, enhancing legacy CRM systems.",
      "Reduced manual work by 50%, automating workflows for increased productivity.",
      "Real-time analytics boosted ROI by 20%, empowering data-driven marketing strategies.",
    ],
  },
  {
    title: "ProfitSpy",
    subtitle: "E-commerce Platform",
    image: "https://www.vaival.com/wp-content/uploads/2024/11/Rectangle-8707.png",
    points: [
      "Increased product success by 40% with AI-powered data insights for smarter inventory decisions.",
      "Seamless integration with platforms like eBay and Walmart boosted revenue by 30%, modernizing sales channels.",
      "Reduced upfront inventory costs by 50% through predictive analytics and demand forecasting.",
    ],
  },
  {
    title: "Float Funnels",
    subtitle: "Funnel Building Platform",
    image: "https://www.vaival.com/wp-content/uploads/2024/11/Rectangle-8705.png",
    points: [
        "30% boost in leads and sales with AI-enhanced customizable pages, upgrading outdated lead capture systems.",
        "Reduced design costs by 40% using a modern drag-and-drop editor, streamlining the legacy design process."

    ],
  },
];

export default function ResultsCarousel() {
  return (
    <section className='bg-[#eff5ff] py-16 px-4 sm:px-8'>
        <div className="  max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        Real Results from{" "}
        <span className="text-[#2169f7] underline decoration-4 decoration-[#2169f7]">
          Real Businesses
        </span>
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="!pb-10"
      >
        {carouselItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="w-full md:w-1/2 font-[Plus Jakarta Sans] text-left">
                <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
                <h4 className="text-xl text-[#2169f7] mb-4">{item.subtitle}</h4>
                {item.points.length > 0 ? (
                  <ul className="list-disc ml-6 space-y-2 text-lg">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-lg italic">Coming soon...</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
    
  );
}
