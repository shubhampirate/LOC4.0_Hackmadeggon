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
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
  return (
    <div>
        
    <div className="flex-0.3 width-300 pr-5px">
      <Button className="mt-15 ml-10 mr-15 capitalize" 
        startIcon={<AddIcon fontSize="large" 
         />} >
        Compose
      </Button>
      <Sidebaroption Icon={InboxIcon} title="Volunteer Roles "  selected={true}/>
      <Sidebaroption Icon={StarIcon} title="Starred " />
      <Sidebaroption Icon={AccessTimeIcon} title="Snoozed " />
      <Sidebaroption Icon={LabelImportantIcon} title="Important " />
      <Sidebaroption Icon={NearMeIcon} title="Sent " />
      <Sidebaroption Icon={NoteIcon} title="Drafts"/>
      <Sidebaroption Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon/>
          </IconButton>
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  );
    </div>
  )
}

export default Sidebar