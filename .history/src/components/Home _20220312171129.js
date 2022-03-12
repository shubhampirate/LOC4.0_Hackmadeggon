import React from 'react'

function Home () {
  return (
    <div>
    <div className="flex  justify-between ">
    <div className="flex justify-center">
        <div className="w-9" ><img src="https://www.womenpeacesecurity.org/files/logo_care_sq.svg" /></div>
        <div className="justify-between pl-20 text-2xl"> ABOUT </div>
        <div className="justify-items-center pl-10 pr-10 text-2xl">FUNDS</div>
        <div className="text-2xl">BLOG</div>
     </div>
     <div className="flex">
     <button className="pr-10 text-2xl"> Signin </button>
     <button className=" pl-10 pr-10 text-2xl"> Signup</button>
     </div>
     </div>
     <div className="" style={{backgroundImage:"url(https://ak.picdn.net/offset/photos/598dbbd017fb156e48068e52/medium/offset_601742.jpg)"}}>for better humanity purposes</div>
     </div>
  )
}

export default Home 