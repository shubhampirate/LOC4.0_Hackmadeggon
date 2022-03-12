import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.jpeg"
function Listofngo() {
  return (
    <div>
        <div className="items-center pl-20 ml-96">
        <div className="h-13 "><img classname="items-center" src={logo}/></div>
        </div>
        List Of Ngos
       <div className=""><Link to="/payment">1. </Link></div>
    </div>
  )
}

export default Listofngo