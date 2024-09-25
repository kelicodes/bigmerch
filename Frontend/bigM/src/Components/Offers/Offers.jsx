import React from 'react';
import './Offers.css';
import banner from '../../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className="left">
        <h2>Exclusive Offers</h2>
        <h1>For Nairobi Residents</h1>
        <h2>Subscribe to our newsletter to get info whenever we upload new products and free delievery arround Nairobi.</h2>
        <button>Check Out</button>
      </div>
      <div className="right">
        <img src={banner} alt="Offers Banner" />
      </div>
    </div>
  );
};

export default Offers;


