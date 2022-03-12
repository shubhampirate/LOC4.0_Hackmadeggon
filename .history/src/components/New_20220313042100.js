import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "./logo.jpeg"
import MoodIcon from '@mui/icons-material/Mood';
function New() {
  return (
    <div>
        <div className="bg-white relative w-full height-7xl flex">
          
        <div className=" text-2xl w-full height-7xl flex">
        <div className="h-13 "><img classname="h-10" src={logo}/></div>
          </div>
          <div className="flex pr-5 pt-10">
        <Avatar />
          </div>
          </div>
          {/* <div className="text-4xl text-center italic">We are here to help You give the society a chance to smile <MoodIcon/></div>
          <div className="pt-12">
            .
          <div className=" italic flex justify-between bg-yellow-200  text-5xl">
            <div className="pl-12 ">Fundraisers</div>
            <div className="pr-20">Volunteers</div>
            <div className="pl-20 pr-20 px-20">Blogging</div>
          </div>
        <div  className="flex   ">
          <div className="flex "><Link className="hover:text-black" to="/listofngo">
         
          <button className="h-screen w-full shadow-lg hover:shadow-slate-300 bg-no-repeat bg-cover " style={{backgroundImage: "url(https://i.cdn-sc.com/MediaVaultImages/94_thumbnail.jpg)"}} >
              
           
              <p className="text-3xl">Donors and Companies in nearly every country in the world. 
                This crowdfunding platform helps organizations access the tools, training, and support they need to be more effective and help their communities.
                 This is a secure and trusted platform to raise money.</p>
          </button>
          </Link>
          <hr />
          <div className=""><Link className="hover:text-black" to="/booking">
          <button className="h-screen  shadow-lg  hover:shadow-slate-300 bg-no-repeat bg-cover "  style={{backgroundImage: "url(https://www.palomar.edu/sociology/wp-content/uploads/sites/108/2016/02/iStock_000082683071_Medium-volunteer-photo.jpg)"}}>
           
            <p className="justify-start text-2xl">Individuals who willingly devote their time, effort, and skill are known as volunteers.

Promotion and raising funds, administrative responsibilities, and team initiatives are all examples of these responsibilities.
crowdfunding platforms can make an enormous difference for the social sector entrepreneurs and their poverty alleviation, healthcare, and other activities on the ground. In fact, it has been proven globally that NGO fundraising gets a huge shot when it is done through crowdfunding platforms.</p>
          </button>
          </Link>
          </div><Link className="hover:text-black" to="/blogging">
          <button className="h-screen  shadow-lg hover:shadow-slate-300 bg-no-repeat bg-cover" style={{backgroundImage: "url(https://www.threegirlsmedia.com/wp-content/uploads/2017/07/3G.BloggingDosAndDonts.7.23.2017.jpg)"}} > 
             
             
              <p className=" text-xl ">The Internet is valuable when extending the reach of your Non-for-Profit Organization. Developing your online presence can share your Nonprofit's mission with those beyond your local community and provide information about your cause.
Building an online presence might sound daunting, at first. And trust me to some extent, it is. Maintaining a blog page will help you accomplish this daunting task. Determine what goal you’d like to accomplish through your blog. Then, develop content accordingly that pushes you along that path.</p>

          </button>
          </Link>
          </div>
          </div>
          </div> */}
          <div>
    
        
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://www.accountingweb.com/sites/default/files/seminar.jpg" alt="/" />
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
                <h1 className='text-5xl italic text-center'>Volunteers</h1>  <p className="text-2xl justify-between">Individuals who willingly devote their time, effort, and skill are known as volunteers.

Promotion and raising funds, administrative responsibilities, and team initiatives are all examples of these responsibilities.
crowdfunding platforms can make an enormous difference for the social sector entrepreneurs and their poverty alleviation, healthcare, and other activities on the ground. In fact, it has been proven globally that NGO fundraising gets a huge shot when it is done through crowdfunding platforms.</p>
                   
                   
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
                <h1 className='text-5xl italic text-center'>Blogging</h1>  <p className="text-2xl justify-between">The Internet is valuable when extending the reach of your Non-for-Profit Organization. Developing your online presence can share your Nonprofit's mission with those beyond your local community and provide information about your cause.
Building an online presence might sound daunting, at first. Maintaining a blog page will help you accomplish this daunting task. Determine what goal you’d like to accomplish through your blog. Then, develop content accordingly that pushes you along that path.</p>
                   
                  
                   
                </form>
             </div>
        </div>
    </div>
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
          
            <div className='p-4 flex flex-col justify-around'>
                <form>
                   
                    <div>
                    <Link to="/bookingslot">   <h1 className='text-5xl italic'>Educational Drives </h1> </Link> 
                    </div>
                   
                </form>
             </div>
             <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src="https://iacharity.uk/wp-content/uploads/2020/05/jordan.jpg" alt="/" />
            </div>
        </div>
    </div>
      </div>

   

    </div>
  )
}

export default New