import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.jpeg"
function Listofngo() {
  return (
    <div>
        <div className="items-center pl-56 ml-80">
        <div className="h-13 "><img classname="items-center" src={logo}/></div>
        </div>
        <div className="">
            <h1 className="text-center pr-20 text-7xl"> Best Ngos in Mumbai</h1>     
      <div className=""> 
            <div className=""><Link to="/payment">NGOS </Link></div>
            <div className=""><Link to="/payment">SERVICES </Link></div>
            </div>
            
      <div className=""> 
            <div className=""><Link to="/payment">1.Akshara Centre </Link></div>
            <div className=""><Link to="/payment">Education </Link></div>
            </div>
            
      <div className=""> 
            <div className=""><Link to="/payment">2. ALERT-INDIA Association for Leprosy education, Rehabilitation & Treatment India </Link></div>
            <div className=""><Link to="/payment">Health </Link></div>
            </div>
            
      <div className=""> 
            <div className=""><Link to="/payment">3. Annamrita-ISKCON Food Relief Foundation </Link></div>
            <div className=""><Link to="/payment">Children </Link></div>
            </div>
            
      <div className=""> 
            <div className=""><Link to="/payment">4. Antarang Foundation </Link></div>
            <div className=""><Link to="/payment">Education </Link></div>
            </div>
            
      <div className=""> 
            <div className=""><Link to="/payment">1.Akshara Centre </Link></div>
            <div className=""><Link to="/payment">1.Akshara Centre </Link></div>
            </div>
            
       <div className=""><Link to="/payment">2.  </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       <div className=""><Link to="/payment"> </Link></div>
       </div>

    </div>
  )
}

export default Listofngo