import React from 'react'
import './PropertiesCard.css'

const PropertiesCard = ({item}) => {
  return (
    <div className='property-card'>
        <div className="property-logo-container">
            <img src={item.image} />
        </div>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
    </div>
  )
}

export default PropertiesCard
