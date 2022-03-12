import React from 'react'

function SidebarOption({Icon,title,number,selected}) {
  return (
    <div className={`sidebarOption ${selected && 'sidebar--active'}`}>
        <Icon/>
        <h3>{title}</h3>
       
    </div>
  )
}

export default SidebarOption