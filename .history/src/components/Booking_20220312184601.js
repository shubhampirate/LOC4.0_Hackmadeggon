import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, IconButton } from '@mui/material';
function Booking() {
  return (
    <div>
        <div className="bg-white relative w-full height-7xl flex">
          <div className="pl-5">
          <IconButton>
          <MenuIcon />
          
        </IconButton>
        </div>
        <div className="justify-center text-2xl w-full height-7xl flex">
            NGO
          </div>
          <div className="flex pr-5 ">
        <Avatar/>
          </div>
          </div>
         <div className="flex justify-center pt-10">
          <button className="pr-20">
            Seminars
          </button>
          
          <button className="pl-10">
            Workshops
          </button>
          </div>
          <div className="flex justify-center pt-10"> 
          <button className="">
            Awareness drives
          </button>
          
          <button className="pl-10">
            Education
          </button>
          </div>
          
    </div>
  )
}

export default Booking