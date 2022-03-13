import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "./logo.jpeg"
import MoodIcon from '@mui/icons-material/Mood';
function Ngonew() {
  return (
    <div>
        <div className="bg-white relative w-full height-7xl flex">
          
        <div className=" text-2xl w-full height-7xl flex">
        <div className="h-13 "><Link to="/ngonew"> <img classname="h-10" src={logo}/> </Link></div>
          </div>
         <div className="pr-10">
          <Link to="/">
            <button className="w-28 py-2 mt-8 bg-black hover:bg-gray-600 relative text-white rounded-lg "> Logout</button>
          </Link>
          </div>
         
          </div>
          <div>
    
        
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://i.cdn-sc.com/MediaVaultImages/94_thumbnail.jpg" alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                <Link className="hover:text-black" to="/listofngo">
                    
                       <h1 className='text-5xl italic text-center'>Fundraisers</h1>  <p className="text-3xl justify-between">Donors and Companies in nearly every country in the world. 
                This crowdfunding platform helps organizations access the tools, training, and support they need to be more effective and help their communities.
                 This is a secure and trusted platform to raise money.</p>
                 </Link>
                    
                </form>
             </div>
        </div>
    </div>
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                <Link className="hover:text-black" to="/booking">
                <h1 className='text-5xl italic text-center'>Volunteers</h1>  <p className="text-2xl justify-between">Individuals who willingly devote their time, effort, and skill are known as volunteers.

Promotion and raising funds, administrative responsibilities, and team initiatives are all examples of these responsibilities.
crowdfunding platforms can make an enormous difference for the social sector entrepreneurs and their poverty alleviation, healthcare, and other activities on the ground. In fact, it has been proven globally that NGO fundraising gets a huge shot when it is done through crowdfunding platforms.</p>
                   
                   </Link>
                </form>
             </div>
             <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://www.palomar.edu/sociology/wp-content/uploads/sites/108/2016/02/iStock_000082683071_Medium-volunteer-photo.jpg" alt="/" />
            </div> 
             
        </div>
    </div>
   
   
      </div>
     

   

    </div>
  )
}

export default Ngonew