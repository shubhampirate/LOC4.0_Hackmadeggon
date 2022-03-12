import React from 'react'

function SidebarOption({Icon,title,number,selected}) {
  return (
    <div className="">
        <Icon/>
        <h3>{title}</h3>
       
    </div>
  )
}

export default SidebarOption