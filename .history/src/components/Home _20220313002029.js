import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.jpeg" 
function Home () {
  return (
    <div>
    <div className="flex  justify-between bg-white text-black">
    <div className="flex ">
       
        {/* <div className=" pl-20 text-5xl hidden sm:block"> ABOUT </div>
        <div className=" pl-10 pr-10 text-5xl hidden sm:block">FUNDS</div>
        <div className="text-5xl hidden sm:block">BLOG  </div> */}
          <div className="h-15"><img classname="h-10" src={logo}/></div>
     </div>
     <div className="flex ">
     <button className="pr-10 text-5xl"><Link to="/signin">Signin </Link></button>
     <button className=" pl-10 pr-10 text-5xl"><Link to="/signup"> Signup</Link></button>
     </div>
     </div>
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
    
    <div className="bg-cyan-200 pt-5 pb-5">
      <h1 className='text-7xl text-center
      '>OUR VISION</h1>
      <p className='text-2xl'>To create, maintain and grow digital & physical infrastructure which serves as bridge between non profit organisations and their donors.

To enhance transparency between all the stakeholders of non profit organisation to build trust based relationship.

To make nonprofit organisations sustainable and help grow their reach to donors as wells as beneficiaries.</p>
      
    </div>
   
    <div className='bg-black text-white'>
      <h1 className='text-2xl'>About Us</h1>
      <br/>
        NGO Transparency is a web-based platform, which serves as a connecting bridge between NGOs and donors through a transparent & trustworthy mechanism. It contributes to the growth of NGOs reach to masses whether their donors or beneficiaries and help them achieve success in their missions.         
        </div>
     </div>
  )
}

export default Home 