import React from 'react'

function Home () {
  return (
    <div>
    <div className="flex  justify-between ">
    <div className="flex justify-center">
        <div className="justify-between pl-20 "> ABOUT </div>
        <div className="justify-items-center pl-10 pr-10">FUNDS</div>
        <div className="">BLOG</div>
     </div>
     <div className="flex">
     <button className="pr-10"> Signin </button>
     <button className=" pl-10 pr-10"> Signup</button>
     </div>
     </div>
     <div className="" style={{backgroundImage:"url(https://qph.fs.quoracdn.net/main-qimg-d2059a8d696af9b93b39458060a55e55-pjlq))"}}>for better humanity purposes</div>
     </div>
  )
}

export default Home 