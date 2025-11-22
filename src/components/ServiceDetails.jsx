import React from "react";
import { useParams } from "react-router-dom";
import Logo1 from "../assets/logo1.png";
import WebDevImg from "../assets/image.png";

const detailData = {
  1: {
    title: "Web Development",
    image: WebDevImg,
    description:
      "We build fast, modern, responsive websites using React, Next.js, and modern UI frameworks.",
  },
  2: {
    title: "UI/UX Design",
    image: Logo1,
    description:
      "We create beautiful wireframes, mockups, prototypes, and complete UI/UX systems.",
  },
  3: {
    title: "Database",
    image: Logo1,
    description:
      "We design optimized databases using MongoDB, MySQL, and cloud-based storage.",
  },
  4: {
    title: "Networking",
    image: Logo1,
    description:
      "We configure networks, secure systems, and build enterprise-level IT infrastructures.",
  },
  5: {
    title: "Cyber Security",
    image: Logo1,
    description:
      "Ethical hacking, penetration testing, and security audits for safe environments.",
  },
  6: {
    title: "Mobile Apps",
    image: Logo1,
    description:
      "Mobile apps for Android and iOS built using Flutter and React Native.",
  },
  7: {
    title: "AI Solutions",
    image: Logo1,
    description:
      "AI automation, chatbots, machine learning, and business intelligence tools.",
  },
  8: {
    title: "Game Development",
    image: Logo1,
    description:
      "2D/3D game development using Unity and Unreal Engine.",
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = detailData[id];

  return (
    <div className="px-6 md:px-20 py-16">
      <h1 className="text-5xl font-extrabold text-purple-600 mb-8">
        {service.title}
      </h1>

      <img
        src={service.image}
        alt={service.title}
        className="rounded-2xl shadow-xl w-full max-w-3xl mb-8"
      />

      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceDetails;
