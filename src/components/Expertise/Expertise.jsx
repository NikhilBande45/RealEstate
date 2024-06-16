import React from 'react'
import PropertiesCard from '../PropertyCard/PropertiesCard'
import { assets } from '../../Assets/Assets'
const Expertise = () => {

    const expertise = [
        {
            image: assets.Expertise_1,
            name: "Call-to-Action Optimization",
            desc: " See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
        },
        {
            image:  assets.Expertise_2,
            name: "Conversion-Optimized Landing Pages",
            desc: "Explore a case study where our landing page optimization increased property lead conversion rates by 30%",
        },
        {
            image:  assets.Expertise_3,
            name: "Trust Building with Social Proof",
            desc: "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
        },
        {
            image:  assets.Expertise_4,
            name: "Mobile-First Success:",
            desc: "Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
        }
    ]
  return (
    <div className='property'>
      <h2 className='property-title'>Our Expertise in Action</h2>
      <div className="property-content">
        {
            expertise.map((item , index) =>(
              <PropertiesCard key={index} item={item} />
            ))
        }
      </div>
    </div>
  )
}

export default Expertise
