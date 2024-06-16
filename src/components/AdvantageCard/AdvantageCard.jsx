import React from 'react'
import './AdvantageCard.css'

const AdvantageCard = ({item}) => {
  return (
    <div className='advantage-card'>
      <div className="advantage-logo-container">
        <img src={item.image} />
      </div>

      <div className="advantage-content">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

export default AdvantageCard
