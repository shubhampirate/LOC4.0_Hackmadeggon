import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.jpeg" 
function Blogging() {
  return (
    <div>
        <div className="items-center pl-56 ml-80">
        <div className="h-13 "><img classname="items-center" src={logo}/></div>
        </div>
        <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                <h1> Start writiing a BLOG</h1>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                   
                    <div>
                    <Link to="/bookingslot">     <h1 className='text-5xl'>Seminars</h1>  </Link>
                    </div>
                   
                </form>
             </div>
            
        </div>


    </div>
       
        
        name of blog
        Topic of blog
        Description

    </div>
  )
}

export default Blogging