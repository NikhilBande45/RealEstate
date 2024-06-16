import React from 'react'
import { assets } from '../../Assets/Assets'
import './DigitalMastery.css'
const DigitalMastery = () => {
  return (
    <div className='digital-mastery'>
        <h2 className='digital-mastery-title'>Real Estate-Focused Digital Mastery</h2>
        <div className="digital-mastery-content">
            <div className="digital-mastery-left-content">
                <img src={assets.digitalmastery} />
            </div>
            <div className="digital-mastery-right-content">
                <h2>Unlock the Potential of Digital Real Estate Excellence</h2>
                <p>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default DigitalMastery
