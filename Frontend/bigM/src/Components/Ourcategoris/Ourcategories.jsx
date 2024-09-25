import React from 'react';
import './Ourcategories.css';
import product from '../../assets/product_35.png';
import katana from '../../assets/product_16.png'
import keli from '../../assets/product_8.png'
import { Link } from 'react-router-dom';

const Ourcategories = () => {
  return (
    <div className="our"> 
      <h3>Our Categories</h3>
      <div className="container">
        <Link to="/hoodies">
          <div className="category">
            <img src={product} alt="Hoodies" />
            <p>Hoodies</p>
          </div>
        </Link>
        <Link to="/sweaters">
          <div className="category">
            <img src={katana} alt="Sweaters" />
            <p>Sweaters</p>
          </div>
        </Link>
        <Link to="/shirts">
          <div className="category">
            <img src={keli} alt="Shirts" />
            <p>Shirts</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Ourcategories;

