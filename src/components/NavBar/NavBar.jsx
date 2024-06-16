import React from 'react'
import { assets } from '../../Assets/Assets'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={assets.Logo}/>
      <button>Contact Us</button>
    </div>
  )
}

export default NavBar
