import React from 'react'
import Sidebaroption from './Sidebaroption'
import { Button, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Sidebar() {
  return (
    <div>
        
    <div className="flex-0.3 width-300 pr-5px">
      <Sidebaroption Icon={InboxIcon} title="Crowdfunding"  selected={true}/>
      <Sidebaroption Icon={StarIcon} title="Seminars" />
      <Sidebaroption Icon={AccessTimeIcon} title="" />
      <Sidebaroption Icon={LabelImportantIcon} title="Important " />
      <Sidebaroption Icon={NearMeIcon} title="Sent " />
      <Sidebaroption Icon={NoteIcon} title="Drafts"/>
      <Sidebaroption Icon={ExpandMoreIcon} title="More" />
      
    </div>
  );
    </div>
  )
}

export default Sidebar