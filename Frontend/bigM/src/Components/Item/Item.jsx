import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p>{props.name}</p>
      <p>{props.desc}</p>
      <p>KSH {props.price}</p>
    </div>
  )
}

export default Item
