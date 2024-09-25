import React from 'react'
import "./Breadcrum.css"
import arrow from "../../assets/breadcrum_arrow.png"
import { useContext } from 'react'
import { ShopContext } from '../../Context/Context'
import { useParams } from 'react-router-dom';
const Breadcrum = () => {
    const {allproducts}=useContext(ShopContext)
    const {productId} = useParams();
    const product = allproducts.find((e)=>e.id === Number(productId))
    if (!product) {
      return <div>Loading...</div>; // Or any fallback UI
    }
  return (
    <div className='breadcrum'>
      Home <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
