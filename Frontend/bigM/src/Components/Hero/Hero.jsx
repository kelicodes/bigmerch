import React from 'react'
import { useState, useEffect } from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import home from "../../assets/product_11.png"
import img1 from "../../assets/product_24.png"
import img2 from "../../assets/product_35.png"
import img3 from "../../assets/product_32.png"

const Hero = () => {
  const images = [
    home, img1, img2, img3
  ]
  const [currentindex, setCurrentindex] = useState(0);
  const nextimg = () => {
    setCurrentindex((previndex) => (previndex + 1) % images.length)
  }
  useEffect(() => {
    const intervailid = setInterval(nextimg, 3000)

    return () => clearInterval(intervailid)
  }, [])
  const handlechange = (e) => {
    const newvalue = parseInt(e.target.value, 4)
    setCurrentindex(newvalue)
  }
  return (
    <div className='hero'>
      <div className='txt'>Nairobi Classic  NC<br />
        <p> <span> Nairobi classic </span> is a lifestyle and fashion brand. <br />
          Shop our collection today and enjoy seemless  shooping from the heart of Nairobi.
        </p>
        <Link to="/sweaters">
          <button>Shop now</button></Link>
      </div>
      <img src={images[currentindex]} alt="" className="sliderimage" />
    </div>
  )
}

export default Hero
