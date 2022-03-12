import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.jpeg"
function Listofngo() {
  return (
    <div>
        <div className="justify-center">
        <div className="h-13 "><img classname="h-10" src={logo}/></div>
        </div>
        List Of Ngos
       <div className=""><Link to="/payment">1. </Link></div>
    </div>
  )
}

export default Listofngo