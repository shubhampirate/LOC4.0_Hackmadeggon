import React from 'react'
import Sidebaroption from './Sidebaroption'
import { Button, IconButton } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';

function Sidebar() {
  return (
    <div>
        
    <div className="flex-0.3 width-300 pr-5px">
      <Sidebaroption  title="Crowdfunding"  selected={true}/>
      <Sidebaroption  title="Seminars" />
      <Sidebaroption Icon={NearMeIcon} title="Donations" />
      <Sidebaroption  title="Important Events" />
      <Sidebaroption  title="Voice based Interface " />
      <Sidebaroption Icon={NoteIcon} title="Blog "/>
      
    </div>
    </div>
  );

}

export default Sidebar