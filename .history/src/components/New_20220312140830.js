import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, IconButton } from '@mui/material';
import NotificationsIcon from "@mui/icons-material/Notifications";

function New() {
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
          <button className="p-8">
            <h1>Crowd Funding</h1>
              <p>Donors and Companies in nearly every country in the world. This crowdfunding platform helps organizations access the tools, training, and support they need to be more effective and help their communities. This is a secure and trusted platform to raise money.</p>
          </button>
          <button className="">
            <h1>Volunteers</h1>
            <p></p>
          </button>
          <div className=""></div>
          <div className="">
              <h1>Blogging</h1>
              
          </div>
    </div>
  )
}

export default New