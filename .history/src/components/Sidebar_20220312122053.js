import React from 'react'
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
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
        return (
    <div className="sidebar">
      <Button className="sidebar_compose" 
        startIcon={<AddIcon fontSize="large" 
         />} >
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Volunteer Roles " number={70} selected={true}/>
      <SidebarOption Icon={StarIcon} title="Starred " number={12}/>
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed " number={12}/>
      <SidebarOption Icon={LabelImportantIcon} title="Important " number={12}/>
      <SidebarOption Icon={NearMeIcon} title="Sent " number={12}/>
      <SidebarOption Icon={NoteIcon} title="Drafts" number={12}/>
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={12}/>
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