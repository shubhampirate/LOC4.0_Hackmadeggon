import React from 'react'

function Home () {
  return (
    <div>
    <div className="flex  justify-between ">
    <div className="flex justify-center">
        <div className="w-10" ><img src="https://www.womenpeacesecurity.org/files/logo_care_sq.svg" /></div>
        <div className="justify-between pl-20 "> ABOUT </div>
        <div className="justify-items-center pl-10 pr-10">FUNDS</div>
        <div className="">BLOG</div>
     </div>
     <div className="flex">
     <button className="pr-10"> Signin </button>
     <button className=" pl-10 pr-10"> Signup</button>
     </div>
     </div>
     <div className="" style={{backgroundImage:"url(https://i.cdn-sc.com/MediaVaultImages/94_thumbnail.jpg))"}}>for better humanity purposes</div>
     </div>
  )
}

export default Home 