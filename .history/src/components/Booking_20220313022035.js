import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import {Link} from "react-router-dom"
import logo from "./logo.jpeg" 
function Booking() {
  return (
    <div>
      <div className="flex">
      <div className="justify-center text-5xl w-full height-7xl flex">
      <div className="h-15"><img classname="h-10" src={logo}/></div>
        </div>
        <div className="flex pt-5 pr-5 ">
          <Avatar />
        </div>
        </div>
      <div className="bg-white relative w-full height-7xl flex">
        <div className="pl-5">
        <div className='grid grid-cols-1 sm:grid-cols-2 h-auto w-full'>
        <div className='hidden sm:block'><br /><br /><br />
            <button className="h-76 w-full px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"> Seminars</button>
            <button className=""> WorkShop</button>
                    </div>
        </div>
        <div className=' flex flex-col justify-between'>
        <button className=""> Awareness Drives</button>
            <button className=""> Educational Drives</button>
       
        </div>
        </div>
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
</div>


      </div>
  );
}

export default Booking;
