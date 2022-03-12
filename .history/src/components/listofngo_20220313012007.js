import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.jpeg"
function Listofngo() {
  return (
    <div>
        <div className="items-center pl-56 ml-80">
        <div className="h-13 "><img classname="items-center" src={logo}/></div>
        </div>
        <div className="items-center">        List Of Ngos
       <div className=""><Link to="/payment">1. </Link></div>
       </div>

    </div>
  )
}

export default Listofngo