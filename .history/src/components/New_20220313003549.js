import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "./logo.jpeg"
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
          <div className="text-5xl text-center italic">We are here to help You give the society a chance to smile</div>
          <div className="pt-12">
          
        <div  className="flex">
          <div className="flex "><Link className="hover:text-black" to="/listofngo">
         
          <button className="h-96 w-40 shadow-lg hover:shadow-slate-300 bg-no-repeat bg-cover " style={{backgroundImage: "url(https://i.cdn-sc.com/MediaVaultImages/94_thumbnail.jpg)"}} >
              
            <h1 className="text-4xl">Crowd Funding</h1>
              <p className="">Donors and Companies in nearly every country in the world. 
                This crowdfunding platform helps organizations access the tools, training, and support they need to be more effective and help their communities.
                 This is a secure and trusted platform to raise money.</p>
          </button>
          </Link>
          <div className=""><Link className="hover:text-black" to="/booking">
          <button className="h-96 shadow-lg hover:shadow-slate-300 bg-no-repeat bg-cover "  style={{backgroundImage: "url(https://www.palomar.edu/sociology/wp-content/uploads/sites/108/2016/02/iStock_000082683071_Medium-volunteer-photo.jpg)"}}>
            <h1 >Volunteers</h1>
            <p className="justify-start">Individuals who willingly devote their time, effort, and skill are known as volunteers.
Depending on the company they volunteer for, these individuals contribute their effort and time to several tasks.
Volunteers collaborate with institutions or non-governmental organizations (NGOs). They usually get trained and work under the supervision of the seniors.
Promotion and raising funds, administrative responsibilities, and team initiatives are all examples of these responsibilities.</p>
<p>crowdfunding platforms can make an enormous difference for the social sector entrepreneurs and their poverty alleviation, healthcare, and other activities on the ground. In fact, it has been proven globally that NGO fundraising gets a huge shot when it is done through crowdfunding platforms.</p>
          </button>
          </Link>
          </div><Link className="hover:text-black" to="/blogging">
          <button className="h-96 shadow-lg hover:shadow-slate-300 bg-no-repeat bg-cover" style={{backgroundImage: "url(https://2.bp.blogspot.com/-Vs-hyRuv46M/UDuKzNvce8I/AAAAAAAAEGI/m17icF-0LAk/s1920/abstract+nature+blue_white_red-+1200.jpg)"}} > 
              <h1 className="">Blogging</h1>
              <article>
              <p>The Internet is valuable when extending the reach of your Non-for-Profit Organization. Developing your online presence can share your Nonprofit's mission with those beyond your local community and provide information about your cause.
Building an online presence might sound daunting, at first. And trust me to some extent, it is. Maintaining a blog page will help you accomplish this daunting task. Determine what goal you’d like to accomplish through your blog. Then, develop content accordingly that pushes you along that path.</p>
</article>
          </button>
          </Link>
          </div>
          </div>
          </div>
    </div>
  )
}

export default New