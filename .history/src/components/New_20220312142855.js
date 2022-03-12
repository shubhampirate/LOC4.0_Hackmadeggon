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
          <div className="pt-12  ">
          <div className="py-15">
          <button className="shadow-lg hover:shadow-slate-300 mx-auto ">

            <h1>Crowd Funding</h1>
              <p>Donors and Companies in nearly every country in the world. This crowdfunding platform helps organizations access the tools, training, and support they need to be more effective and help their communities. This is a secure and trusted platform to raise money.</p>
          </button>
          <div className="pt-12  "></div>
          <button className="shadow-lg p-8 ">
            <h1 >Volunteers</h1>
            <p className="justify-start">Individuals who willingly devote their time, effort, and skill are known as volunteers.
Depending on the company they volunteer for, these individuals contribute their effort and time to several tasks.
Volunteers collaborate with institutions or non-governmental organizations (NGOs). They usually get trained and work under the supervision of the seniors.
Promotion and raising funds, administrative responsibilities, and team initiatives are all examples of these responsibilities.</p>
          </button>
          <div className="pt-12  "></div>
          <button className="shadow-lg p-8">
              <h1 className="">Blogging</h1>
              <p>The Internet is valuable when extending the reach of your Non-for-Profit Organization. Developing your online presence can share your Nonprofit's mission with those beyond your local community and provide information about your cause.
Building an online presence might sound daunting, at first. And trust me to some extent, it is. Maintaining a blog page will help you accomplish this daunting task. Determine what goal you’d like to accomplish through your blog. Then, develop content accordingly that pushes you along that path.</p>
          </button>
          </div>
          </div>
    </div>
  )
}

export default New