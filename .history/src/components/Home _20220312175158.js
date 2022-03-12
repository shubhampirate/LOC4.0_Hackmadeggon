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
     <div className='grid grid-cols-1 sm:grid-cols-2 h-auto w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="https://acumen.org/wp-content/uploads/US-AID-Photo-1600x1100.jpg" alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
          <h1 className='text-8xl pl-5 text-left'>Habitat </h1>
          <h1 className='text-8xl text-center pr-15'>For </h1>
          <h1 className='text-8xl text-right pr-2'>Humanity </h1>
        </div>
       
    </div>
    <div className="">
      <h1 className=' text-left
      '>OUR VISION</h1>
      <p className='text-7xl'>Neither the markets nor aid alone can solve the problems of poverty. More than two billion people around the world lack access to basic goods and services—from clean water and electricity to an education and the freedom to participate in the economy. We’re here to change that. Our vision is a world based on dignity, where every human being has the same opportunity. Rather than giving philanthropy away, we invest it in companies and change makers.</p>
      
    </div>
    <div className='bg-black text-white'>
        </div>
     </div>
  )
}

export default Home 