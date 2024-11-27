import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollectios/NewCollections'
import NewsLetter from '../Components/NewsLetters/NewsLetter'
// import ShopCategory from './ShopCategory'

const Shop = () => {
  return (
    <div>
        <Hero/>
        
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop