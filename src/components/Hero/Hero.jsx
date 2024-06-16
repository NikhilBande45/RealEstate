import React from 'react'
import './Hero.css'
import { assets } from '../../Assets/Assets'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-top-content">
            <h2 className='hero-heading'>Elevate <span>Real Estate Success</span> with Osumare's Digital Expertise</h2>
            <p>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
            <button>Get Started</button>
        </div>

        <div className="hero-bottom-content">
            <img src={assets.header} />
        </div>
    </div>
  )
}

export default Hero
