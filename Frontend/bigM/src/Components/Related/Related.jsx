import React, { useEffect, useState } from 'react'
import "./Related.css"
import Item from '../Item/Item'

const Related = () => {
    const [related, setRelated]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/newarrivals").then((response)=>response.json()).then((data)=>setRelated(data))
    },[])
  return (
    <div className='relatedproducts'>
      <h2>Related products</h2>
      <div className="cotainer">
      {
        related.map((item,i)=>{
            return <Item key={i} name={item.name} id={item.id} image={item.image} desc={item.desc} price={item.price}/>
        })
      }
      </div>
    </div>
  )
}

export default Related
