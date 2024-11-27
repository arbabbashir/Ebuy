import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_product from '../Assets/data.js'
export default function RelatedProducts() {


    return (
    <div className='related-products'>
        <h2>Related Products</h2>
        <hr />
        <div className='related-products-items'>
            {data_product.map((item,i)=>{
                return (<Item key={i} id={item.id} name={item.name}image={item.image} new_price={item.new_price} old_price={item.old_price} />)
            }
            )}
        </div>
    </div>
)


}
