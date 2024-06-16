import React from 'react'
import './Testinomial.css'
import { assets } from '../../Assets/Assets'

const Testinimial = () => {
  return (
    <div className='testinomial'>
        <div className='flex-col'>
            <h2>What Our Pharma Partners Say</h2>
            <p>Driving Transformations, One Brand at a Time</p>
        </div>
        <div className="testinomial-card">
            <div className="card-left">
                <img src={assets.Video} />
            </div>

            <div className="card-right">
                <div className='card-right-top'>
                    <div className='avatar'>
                        <img src={assets.Avatar} />
                        <h3>Tabish Khan</h3>
                    </div>
                    <img src={assets.Symbol} /> 
                </div>
                <p>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
            </div>
        </div>

        <div className='arrow'>
            <img className="arrow-container" src={assets.LeftArrow} />
            <img className="arrow-container" src={assets.RightArrow} />
        </div>
    </div>
  )
}

export default Testinimial
