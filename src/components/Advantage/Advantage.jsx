import React from 'react'
import './Advantage.css'
import { assets } from '../../Assets/Assets'
import AdvantageCard from '../AdvantageCard/AdvantageCard'

const Advantage = () => {

    const advantage = [
        {
            image: assets.Advantage_1,
            name: "Market Trends Analysis",
            desc: "Predictive insights to guide real estate strategies.",
        },
        {
            image: assets.Advantage_2,
            name: "Targeted Buyer Persona",
            desc: "Understand and connect with your ideal property buyers.",
        },
        {
            image: assets.Advantage_3,
            name: "Competitor Insights",
            desc: "Stand out in the property market with informed strategies.",
        },
        {
            image: assets.Advantage_4,
            name: "Visual Content Appeal",
            desc: "Captivate buyers with appealing visuals and immersive experiences.",
        }
    ]
  return (
    <div className='advantage flex-col'>
        <div className="advantage-top-content flex-col">
            <h2>Navigating Real Estate's Digital Landscape</h2>
            <p>Insights for Real Estate Marketing Advantage</p>
        </div>

        <div className="advantage-bottom-content">
            <div className="advantage-bottom-left-content flex-col">
                {
                    advantage.map((item , index) =>(
                        <AdvantageCard key={index} item={item} />
                    ))
                }
            </div>
            <div className="advantage-bottom-right-content">
                <img src={assets.Advantage} />
            </div>
        </div>
    </div>
  )
}

export default Advantage
