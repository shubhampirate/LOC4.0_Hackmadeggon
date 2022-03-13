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
     <div className="flex pr-10 align-top">
     <button className=" text-2xl w-28 py-2 mt-2  mb-2 bg-black hover:bg-gray-600 hover:text-white relative text-white rounded-lg text-opacity-10"><Link to="/signin">User Signin </Link></button>
     <div className="pl-5 pr-5">
     <button className=" text-2xl w-28 py-2 pl-2 mt-2  mb-1 bg-black hover:bg-gray-600 hover:text-white  text-white rounded-lg text-opacity-10"><Link to="/signin">User SignUp </Link></button>
     </div><button className="text-2xl w-28 py-2 pl-2 mt-1  mb-1 bg-black hover:bg-gray-600 hover:text-white relative text-white rounded-lg text-opacity-10 "><Link to="/signup">Ngo Signup</Link></button>
     </div>
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 h-auto w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="https://acumen.org/wp-content/uploads/US-AID-Photo-1600x1100.jpg" alt="" />
        </div>

        <div className='bg-lime-200 flex flex-col justify-center'>
          <h1 className='text-8xl pl-5 text-left italic'>Habitat </h1>
          <h1 className='text-8xl text-center pr-20 italic'>For </h1>
          <h1 className='text-8xl text-right pr-2 italic'>Humanity </h1>
          <div className="flex justify-center">
          <button className="text-2xl w-28 py-2 pl-2 mt-8 bg-black hover:bg-gray-600 hover:text-white relative text-white rounded-lg text-opacity-10"> NGO </button>
          <div className="pl-5">
          <button className="text-2xl w-28  py-2 pl-2 mt-8 bg-black hover:bg-gray-600 hover:text-white relative text-white rounded-lg text-opacity-10"> USER </button>
        </div>
        </div>
        </div>
       
    </div>

    
    <div className="bg-cyan-200 pt-5 pb-5">
      <h1 className='text-7xl text-center italic
      '>Our Vision</h1>
      <p className='text-2xl italic'>To create, maintain and grow digital and physical infrastructure which serves as bridge between non profit organisations and their donors.

To enhance transparency between all the stakeholders of non profit organisation to build trust based relationship.

To make nonprofit organisations sustainable and help grow their reach to donors as wells as beneficiaries.</p>
      
    </div>
   
   
    <div className='bg-black text-white text-2xl'>

      <h1 className='text-4xl'>About Us</h1>
      <br/>
        NGO Transparency is a web-based platform, which serves as a connecting bridge between NGOs and donors through a transparent & trustworthy mechanism. It contributes to the growth of NGOs reach to masses whether their donors or beneficiaries and help them achieve success in their missions.         
        </div>
     </div>
  )
}

export default Home 
//<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60287.64290025739!2d72.8244526641613!3d19.196177144550433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sngos%20near%20me!5e0!3m2!1sen!2sin!4v1647134361752!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    