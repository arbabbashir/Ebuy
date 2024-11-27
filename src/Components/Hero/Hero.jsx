import React from 'react'
import './Hero.css'
import Hand from '../Assets/hand_icon.png'
import Arrow from '../Assets/arrow.png'
import Hero_icon from '../Assets/hero_image.png'

const  Hero = () => {
  return (
    <div className='hero' >
        <div className='hero-left'>
            <h2>New Arrivals Only </h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={Hand} alt="hand" />
                </div>
                <p>Collections</p>
                <p>For Everone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={Arrow} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src = {Hero_icon} alt="" />
        </div>
    </div>
  )
}

export default  Hero