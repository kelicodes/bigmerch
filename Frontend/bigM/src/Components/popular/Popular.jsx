import React, { useContext, useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/Context';
const Popular = () => {
  const [popular, setPopular] = useState([]);

  const{url}=useContext(ShopContext)
  useEffect(() => {
    fetch(`${url}/popularinnairobi`)
      .then((response) => response.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div className='popular'>
      <h4>Popular In Nairobi</h4>
      <div className="container">
        {popular.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

