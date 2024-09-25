import React, { useContext, useEffect, useState } from 'react';
import './Newarrivals.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/Context';

const Newarrivals = () => {
  const [newarrivals, setNewarrivals] = useState([]);
  const {url}= useContext(ShopContext)

  useEffect(() => {
    fetch(`${url}/newarrivals`)
      .then((response) => response.json())
      .then((data) => setNewarrivals(data));
  }, []);

  return (
    <div className='arrivals'>
      <h3>New Arrivals</h3>
      <div className="container">
        {
          newarrivals.map((item, i) => (
            <Item key={i} image={item.image} id={item.id} name={item.name} price={item.price} desc={item.desc} />
          ))
        }
      </div>
    </div>
  );
};

export default Newarrivals;

