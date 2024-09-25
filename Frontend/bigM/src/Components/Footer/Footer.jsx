import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logo_big.png'

import ig from '../../assets/instagram_icon.png'
import pint from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <img src={footerlogo} alt="" />
        <p>NAIROBI CLASSIC</p>
      </div>
      <ul className="footerlinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footersocialicons">
        <div className="footericonscontainer">
            <img src={ig} alt="" />
        </div>
        <div className="footericonscontainer">
            <img src={whatsapp} alt="" />
        </div>
        <div className="footericonscontainer">
            <img src={pint} alt="" />
        </div>
      </div>
      <div className="footercopyright">
        <hr />
        <p>Copyright @2023 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
