import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import {Link} from "react-router-dom"
import logo from "./logo.jpeg" 
function Booking() {
  return (
    <div>
     <div className="items-center pl-56 ml-80">
        <div className="h-13 "><img classname="items-center" src={logo}/></div>
        </div>
        {/* <div className="justify-center text-5xl w-full height-7xl flex">
          NGO
        </div>
        <div className="flex pr-5 ">
          <Avatar />
        </div>
      </div>
      <div className="flex justify-evenly ">
        <div className="flex justify-center pt-10 text-5xl ">         <button className="pr-20 shadow-lg box-order text-right h-56 w-80  justify-self-end">Seminars</button>
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
        <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://www.accountingweb.com/sites/default/files/seminar.jpg" alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                   
                    <div>
                    <Link to="/bookingslot">     <h1 className='text-5xl'>Seminars</h1>  </Link>
                    </div>
                   
                </form>
             </div>
        </div>
    </div>
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                   
                    <div>
                    <Link to="/bookingslot">   <h1 className='text-5xl italic'>Workshops</h1>  </Link>
                    </div>
                   
                </form>
             </div>
             <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://indianorphanage.com/io/wp-content/uploads/2015/07/orphanage-vocational-training.jpg" alt="/" />
            </div> 
             
        </div>
    </div>
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://helpagecanada.ca/wp-content/uploads/2020/04/Awareness-drive-2_FRlogo.jpg" alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                   
                    <div>
                    <Link to="/bookingslot">     <h1 className='text-5xl italic'>Awareness Drives</h1>  </Link>
                    </div>
                   
                </form>
             </div>
        </div>
    </div>
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
          
            <div className='p-4 flex flex-col justify-around'>
                <form>
                   
                    <div>
                       <h1 className='text-5xl italic'>Educational Drives </h1> 
                    </div>
                   
                </form>
             </div>
             <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://iacharity.uk/wp-content/uploads/2020/05/jordan.jpg" alt="/" />
            </div>
        </div>
    </div>
      </div>

   
  );
}

export default Booking;
