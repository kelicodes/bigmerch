import React from 'react'

import Hero from '../../Components/Hero/Hero'
import News from '../../Components/News/News'

import Popular from "../../Components/popular/Popular"
import Newarrival from "../../Components/Newarrivals/Newarrivals"
import Offers from '../../Components/Offers/Offers'
import Ourcategories from '../../Components/Ourcategoris/Ourcategories'
const Home = () => {
  return (
    <div className='home'>
     <Hero/>
     <Ourcategories/>
     <Offers/>
     <Popular/>   
     <News/>
     <Newarrival/>
    </div>
  )
}

export default Home
