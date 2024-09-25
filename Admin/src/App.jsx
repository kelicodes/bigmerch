import React from 'react'
import Nav from './Components/Nav/Nav'
import Admin from './Pages/Admin'
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <div>
     
      <Nav/>
      <Admin/>
    </div>
  )
}

export default App
