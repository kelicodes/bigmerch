import React, { useEffect, useState } from 'react'
import './List.css'
import cross from '../../assets/cross_icon.png'

const Listproduct = () => {
  const [allproducts , setAllproducts]= useState([]);
  const fetchinfo = async ()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json())
    .then((data)=>{setAllproducts(data)})
  }
  useEffect(()=>{
    fetchinfo();
  },[])
  const removeproduct = async (id)=>{
    await fetch('http://localhost:4000/delete',{
      method:"POST",
      headers:{
        Accept:"application/json",
        'Content-type':"application/json"
      },
      body:JSON.stringify({id:id})
    })
    await fetchinfo()
  }
  return (
    <div className='listproduct'>
      <h1>ALL PRODUCTS LIST</h1>
      <div className="listproductformatmain">
        <p>PRODUCTS</p>
        <p>TITLE</p>
        <p>NEW-PRICE</p>
        <p>CATEGORY</p>
        <p>REMOVE</p>
      </div>
      <div className="allproducts">
        <hr />
        {
          allproducts.map((product, index)=>{
            return <> <div key={index} className="listproductformatmain listproductformat">
              <img src={product.image} alt="" className="listproducticon" />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{removeproduct(product.id)}} className='listproductremoveicon' src={cross} alt="" />
            </div>
            <hr />
            </>
          })
        }
      </div>
    </div>
  )
}

export default Listproduct
