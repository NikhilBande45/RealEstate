import React from 'react'
import './Properties.css'
import PropertiesCard from '../PropertyCard/PropertiesCard'
import { assets } from '../../Assets/Assets'

const Properties = () => {
  const property = [
    {
        image: assets.Property_1,
        name: "Call-to-Action Optimization",
        desc: "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
    },
    {
        image: assets.Property_2,
        name: "Landing Page Efficiency",
        desc: "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    },
    {
        image: assets.Property_3,
        name: "Social Proof Utilization",
        desc: "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action",
    },
    {
        image: assets.Property_4,
        name: "Mobile-Friendly Experience",
        desc: "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
    }
]
  return (
    <div className='property'>
      <div className='property-title'>
        <h2 >Driving Property Inquiries to Conversions</h2>
      </div>
      
      <div className="property-content">
        {
            property.map((item , index) =>(
              <PropertiesCard key={index} item={item} />
            ))
        }
      </div>
    </div>
  )
}

export default Properties
