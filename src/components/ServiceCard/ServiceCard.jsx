import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({item}) => {
    console.log(item.name)
  return (
    <div className='service-card'>
        <div className="logo-container">
            <img src={item.image} />
        </div>
        <div className='card-heading'>{item.name}</div>
        <div className='card-desc'>{item.desc}</div>
    </div>
  )
}

export default ServiceCard
