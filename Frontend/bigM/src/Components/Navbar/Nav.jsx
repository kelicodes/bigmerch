import React, { useState,useRef } from 'react'
import "./Nav.css"
import logo from "../../assets/logo.png"
import dropdown from "../../assets/nav_dropdown.png"
import { Link } from 'react-router-dom'
const Nav = () => {
  const [active, setActive] = useState("home")
  const menuRef = useRef();
  const dropdowntoggle = (e) =>{
    console.log("dropdownclicked");
    console.log(menuRef.current)
    menuRef.current.classList.toggle('navmenuvisible');//change nav component classlist
    e.target.classList.toggle('open');//rotation effect
  }
  return (
    <div className='navbar'>
      <div className="left">
        <img src={logo} alt="" />
        <p>Nairobi <br />Classic NC</p>
      </div>
      <div className="right">
        <nav>
        <img className='navdropdown' onClick={dropdowntoggle} src={dropdown} alt="" />
          <ul ref={menuRef} className='navmenu'>
            <Link style={{textDecoration:"none"}} to="/"><li onClick={() => setActive("home")}>Home {active === "home" ? <hr /> : <></>}</li></Link>
            <Link style={{textDecoration:"none"}} to="/sweaters"><li onClick={() => setActive("sweaters")} style={{textDecoration:"none"}}>Sweaters{active === "sweaters" ? <hr /> : <></>}</li></Link>
            <Link style={{textDecoration:"none"}} to="/Hoodies"><li onClick={() => setActive("Hoodies")}>Hoodies{active === "Hoodies" ? <hr /> : <></>}</li></Link>
            <Link style={{textDecoration:"none"}} to="/Shirts"><li onClick={() => setActive("Shirts")}>Shirts{active === "Shirts" ? <hr /> : <></>}</li></Link>
          </ul>
        </nav>
       
      </div>
    </div>
  )
}

export default Nav
