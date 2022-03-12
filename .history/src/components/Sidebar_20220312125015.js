import React from 'react'
import SidebarOption from './Sidebaroption'
import { Button, IconButton } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';

function Sidebar() {
  return (
    <div>
        
    <div className="flex-0.3 width-300 pr-5px">
      <SidebarOption  title="Crowdfunding"  selected={true}/>
      <SidebarOption  title="Seminars" />
      <SidebarOption Icon={NearMeIcon} title="Donations" />
      <SidebarOption  title="Important Events" />
      <SidebarOption  title="Voice based Interface " />
      <SidebarOption Icon={NoteIcon} title="Blog "/>
      
    </div>
    </div>
  );

}

export default Sidebar