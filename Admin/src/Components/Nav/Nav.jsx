import React from 'react'
import "./Nav.css"
import profile from "../../assets/nav-profile.svg"
const Nav = () => {
  return (
    <div className='nav'>
      <p>NAIROBI <br />CLASSICS</p>
      <img src={profile} alt="" />
    </div>
  )
}

export default Nav
