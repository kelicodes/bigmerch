import React from 'react'
import "./Sidebar.css"
import {Link} from 'react-router-dom'
import addproduct from '../../assets/Product_Cart.svg'
import listproduct from "../../assets/Product_list_icon.svg"

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Link to={'/addproduct'} style={{textDecoration:"none"}}>
    <div className="sidebaritem">
      <img src={addproduct} alt="" />
      <p>Add product</p>
    </div>
    </Link>
    <Link to={'/Listproduct'} style={{textDecoration:"none"}}>
    <div className="sidebaritem">
      <img src={listproduct} alt="" />
      <p>Product list</p>
    </div>
    </Link>
  </div>
  )
}

export default Sidebar
