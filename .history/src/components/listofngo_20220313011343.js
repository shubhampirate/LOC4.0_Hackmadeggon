import React from 'react'
import {Link} from "react-router-dom"
function Listofngo() {
  return (
    <div>
        
        <div className="h-13 "><img classname="h-10" src={logo}/></div>
        List Of Ngos
       <div className=""><Link to="/payment">1. </Link></div>
    </div>
  )
}

export default Listofngo