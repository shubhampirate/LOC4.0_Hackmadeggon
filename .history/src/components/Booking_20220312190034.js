import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
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
          <Avatar />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex justify-center pt-10 text-5xl ">
          <button className="pr-20 shadow-lg box-order text-right h-48 w-80 ">Seminars</button>
        </div>
        <div className="flex justify-center pt-10 text-5xl box-order h-48 w-96">
          <button className="pl-10 shadow-lg">Workshops</button>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex justify-center pt-10 text-5xl ">
          <button className="pr-20 shadow-lg">Awareness Drives</button>
        </div>
        <div className="flex justify-center pt-10 pr-10 text-5xl">
          <button className="pl-10 shadow-lg">Education</button>
        </div>
      </div>
      </div>
   
  );
}

export default Booking;
