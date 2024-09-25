import React, { useContext } from 'react'
import Item from "../../Components/Item/Item"
import "./Shop.css"
import { ShopContext } from '../../Context/Context'
import dropdown from "../../assets/dropdown_icon.png"
const Shopcategory = (props) => {
  const { allproducts } = useContext(ShopContext)
  return (
    <div className='category'>
     
      <div className="shopcategoryindexsort">
        <p>
          <span>
            Showing 1 to 12
          </span>
          out of 36 products
        </p>
        <div className="shopcategorysort">
          sort by <img src={dropdown} alt="" />
        </div>
      </div>
     <div className="container">
     {
        allproducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} price={item.price} image={item.image} />
          } else return null
        })
      }
     </div>
    </div>
  )
}

export default Shopcategory
