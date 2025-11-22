import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import WebDevImg from "../assets/image.png";
import Logo1 from "../assets/logo1.png";

// Add as many cards as you want
const services = [
  { id: 1, title: "Web Development", image: WebDevImg, tags: ["React", "3D", "UI"] },
  { id: 2, title: "UI/UX Design", image: Logo1, tags: ["Figma", "Wireframes", "3D"] },
  { id: 3, title: "Database", image: Logo1, tags: ["MongoDB", "MySQL"] },
  { id: 4, title: "Networking", image: Logo1, tags: ["Cisco", "Firewall"] },
  { id: 5, title: "Cyber Security", image: Logo1, tags: ["PenTest", "Analyzer"] },
  { id: 6, title: "Mobile Apps", image: Logo1, tags: ["React Native", "Flutter"] },
  { id: 7, title: "AI Solutions", image: Logo1, tags: ["ML", "Automation"] },
  { id: 8, title: "Game Dev", image: Logo1, tags: ["Unity", "3D"] }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-16 md:px-12">
      <h1 className="text-4xl font-extrabold text-purple-600 mb-10">
        Services
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={25}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.3 }
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div
              onClick={() => navigate(`/services/${service.id}`)}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl
              transition-all cursor-pointer p-4 border border-gray-200 
              hover:border-purple-500 hover:scale-[1.05]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl w-full h-48 object-cover"
              />

              <div className="flex gap-2 mt-3 flex-wrap">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-lg font-bold mt-3">{service.title}</h2>

              <button
                className="mt-4 w-full py-2 rounded-xl bg-purple-600 text-white font-bold
                hover:bg-purple-700"
              >
                View More →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
