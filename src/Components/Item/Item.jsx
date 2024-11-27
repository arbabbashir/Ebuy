import './Item.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom'


const Item = (props) => {
  return (
    <div>
        <div className="item">
            <div className='image-container'>
            <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            </div>
            <p>{props.name}</p>
            <div className="item-prices"> 
                <div className="item-price-new">
                    Pkr {props.new_price}
                </div>
                <div className="item-price-old">
                    Pkr {props.old_price}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item