import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import {Link} from "react-router-dom"
import logo from "./logo.jpeg" 
function Booking() {
  return (
    <div>
     
        {/* <div className="justify-center text-5xl w-full height-7xl flex">
          NGO
        </div>
        <div className="flex pr-5 ">
          <Avatar />
        </div>
      </div>
      <div className="flex justify-evenly ">
        <div className="flex justify-center pt-10 text-5xl "><Link to="/bookingslot">          <button className="pr-20 shadow-lg box-order text-right h-56 w-80  justify-self-end">Seminars</button>
        </Link>

        </div>
        <div className="flex justify-center pt-10 pl-10 text-5xl box-order  h-56 w-96 ">
          <button className="pl-10 shadow-lg">Workshops</button>
        </div>
      </div>
      <div className="flex justify-evenly text-center ">
        <div className="flex justify-center pt-10 pl-20 text-5xl box-order text-right h-56 w-80 ">
          <button className="pr-20 shadow-lg ">Awareness Drives</button>
        </div>
        <div className="flex justify-center pt-10 pr-10 text-5xl">
          <button className="pl-10 shadow-lg">Education</button>
        </div>
      </div> */}
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
          
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>BRAND.</h2>
                    <div>
                        <input className='border p-2 mr-2' type="text" placeholder='Username' />
                        <input className='border p-2' type="password" placeholder='Password' />
                    </div>
                    <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign In</button>
                    <p className='text-center'>Forgot Username or Password?</p>
                </form>
                <p className='text-center'>Sign Up</p>
            </div>
        </div>
    </div>
  )
}
</div>


   
  );
}

export default Booking;
