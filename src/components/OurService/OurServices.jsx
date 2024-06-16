import React from "react";
import "./OurServices.css";
import { assets } from "../../Assets/Assets";
import ServiceCard from "../ServiceCard/ServiceCard";
const OurServices = () => {
  const service = [
    {
      image: assets.vector_1,
      name: "Automotive SEO",
      desc: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
    },
    {
      image: assets.vector_2,
      name: "PPC Precision",
      desc: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    },
    {
      image: assets.vector_3,
      name: "Social Acceleration",
      desc: " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
    },
    {
      image: assets.vector_4,
      name: "Content Excellence",
      desc: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      image: assets.vector_5,
      name: "Web Design",
      desc: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      image: assets.vector_6,
      name: "Data-Driven Insights",
      desc: "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      image: assets.vector_7,
      name: "End-to-End Solutions",
      desc: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      image: assets.vector_8,
      name: "Video marketing",
      desc: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    }

  ];
  return (
    <div className="our-serices flex">
      <div className="service-top-content flex">
        <h2>Our Service Offerings</h2>
        <p>Strategies that Drive Property Market Excellence</p>
      </div>
      <div className="service-bottom-content flex">
        <div className="grid">
          {service.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
        <button>Get started</button>
      </div>
    </div>
  );
};

export default OurServices;
