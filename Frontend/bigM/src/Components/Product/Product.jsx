import React, { useContext } from 'react'
import "./Product.css"
import { ShopContext } from '../../Context/Context'
import goldstar from "../../assets/goldstar.png"
import darkstar from "../../assets/darkstar.png"
import { useParams } from 'react-router-dom'
const Product = () => {
  const { allproducts } = useContext(ShopContext)
  const { productId } = useParams();
  const product = allproducts.find((e) => e.id === Number(productId))
  if (!allproducts || allproducts.length === 0) {
    return <p>Loading...</p>; // or show a spinner
  }
  const handleWhatsAppRedirect = () => {
    // Construct the message with product details
    const productDetails = `Product Name: ${product.name}\nPrice: ${product.price}\nDescription: ${product.description}`;
    const encodedProductDetails = encodeURIComponent(productDetails);

    const phoneNumber = '+254702548986'; // Replace with your actual WhatsApp phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodedProductDetails}`;

    // Redirect to WhatsApp
    window.open(url, '_blank');
  };
  return (
    <div className='productdisplay'>
      <div className="productleft">
        <div className="productimg">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="mainimg">
          <img className='mainimgimage' src={product.image} alt="" />
        </div>
      </div>
      <div className="productriht">
        <h2>{product.name}</h2>
        <div className="stardisplay">
          <img src={goldstar} alt="" />
          <img src={goldstar} alt="" />
          <img src={goldstar} alt="" />
          <img src={goldstar} alt="" />
          <img src={darkstar} alt="" />
          <p>{122}</p>
        </div>
        <div className="price">
          ksh {product.price}
        </div>
        <div className="desc">
          {product.desc}
        </div>
        <div className="displaysize">
          <h1>Select size</h1>
          <div className="displaysizes">
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
            <div>XL</div>
            <div>Double XL</div>
          </div>
          <button onClick={handleWhatsAppRedirect} >Order via Whatsapp.</button>
        </div>
        <p className="displaycategory">
          {product.category}
          <br />
         { product.desc}
        </p>
      </div>
    </div>
  )
}

export default Product
