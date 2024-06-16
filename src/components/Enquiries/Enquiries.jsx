import React from 'react'
import './Enquiries.css'
import { assets } from '../../Assets/Assets'

const Enquiries = () => {
  return (
    <div className='enquiries'>
        <div className="enquiries-top-content">
            <h2>Driving Property Inquiries to Conversions</h2>
            <p>Streamlined Strategies for Real Estate Success</p>
        </div>

        <div className="enquiries-bottom-content">
            <div className="enquiries-bottom-left-content">
                <img src={assets.enquirey} />
            </div>
            <div className="enquiries-bottom-right-content">
                <h2>Optimized Path to Property Purchase</h2>
                <p>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Enquiries
