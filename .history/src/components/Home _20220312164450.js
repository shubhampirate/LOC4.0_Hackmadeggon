import React from 'react'

function Home () {
  return (
    <div>
    <div className="flex  justify-between ">
    <div className="flex">
        <div className="justify-between pl-10 "> ABOUT </div>
        <div className="justify-items-center pl-10 pr-10">FUNDS</div>
        <div className="">BLOG</div>
     </div>
     <div className="flex">
     <button className="pr-10"> Signin </button>
     <button className=" pl-10 pr-10"> Signup</button>
     </div>
     </div>
     <div className="" style={{backgroundImage:"url(https://acumen.org/wp-content/uploads/US-AID-Photo-1600x1100.jpg)"}}></div>
     </div>
  )
}

export default Home 