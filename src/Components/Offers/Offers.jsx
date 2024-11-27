import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import Arrow from '../Assets/arrow.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on Best Seller Products</p>
            <button>Check Now <img src = {Arrow} alt="" /></button>
            
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
export default Offers