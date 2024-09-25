import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className='news'>
      <h3>Join our newsletter</h3>
      <p>To get notifications whenever we have new outfits.</p>
      <div className="container">
        <input type="text" placeholder='*Enter your email address' />
        <button>Join</button>
      </div>
    </div>
  );
};

export default News;
