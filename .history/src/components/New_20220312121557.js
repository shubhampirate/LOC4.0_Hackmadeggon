import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, IconButton } from '@mui/material';
import NotificationsIcon from "@mui/icons-material/Notifications";

function New() {
  return (
    <div>
        <div className="bg-white relative w-full height-7xl flex">
          <div className="">
          <IconButton>
          <MenuIcon />
          
        </IconButton>
        </div>
        <div className="justify-center w-full height-7xl flex">
            NGO
          </div>
          <div className="flex  ">
          <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar/>
          </div>
          </div>
    </div>
  )
}

export default New