import React from 'react'
import Home from './Pages/Home/Home'
import Shopcategory from './Components/Category/Shopcategory'
import { Route,Routes } from 'react-router-dom'
import banner from "../src/assets/banner.jpeg"
import Product from './Pages/Product'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hoodies" element={<Shopcategory category="Hoodies" banner={banner}/>} />
        <Route path="/sweaters" element={<Shopcategory category="Sweaters" banner={banner}/>} />
        <Route path="/Shirts" element={<Shopcategory category="Shirts" banner={banner}/>} />
        <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
        
      </Routes>
      <Footer/>
    </div>
  )
  
}

export default App
