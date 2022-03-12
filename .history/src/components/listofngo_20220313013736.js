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
      {/* <div className="flex  text-center"> 
            <div className=""><h1 className="text-center">NGOS </h1></div>
            <div className="text-center mr-8"><Link to="/payment">SERVICES </Link></div>
        </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">1.Akshara Centre </Link></div>
            <div className=""><Link to="/payment">Education </Link></div>
            </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">2. ALERT-INDIA Association for Leprosy education, Rehabilitation & Treatment India </Link></div>
            <div className=""><Link to="/payment">Health </Link></div>
            </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">3. Annamrita-ISKCON Food Relief Foundation </Link></div>
            <div className=""><Link to="/payment">Children </Link></div>
            </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">4. Antarang Foundation </Link></div>
            <div className=""><Link to="/payment">Education </Link></div>
            </div>
            
      <div className="flex "> 
            <div className=""><Link to="/payment">5. Ashadeep Association </Link></div>
            <div className=""><Link to="/payment">Children</Link></div>
            </div>
       </div> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 h-auto w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="https://acumen.org/wp-content/uploads/US-AID-Photo-1600x1100.jpg" alt="" />
        </div>

        <div className='bg-lime-200 flex flex-col justify-center'>
          <h1 className='text-8xl pl-5 text-left'>Habitat </h1>
          <h1 className='text-8xl text-center pr-15'>For </h1>
          <h1 className='text-8xl text-right pr-2'>Humanity </h1>
        </div>
     
    </div>
  )
}

export default Listofngo