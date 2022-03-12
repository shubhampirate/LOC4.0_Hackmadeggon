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
     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="" alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>BRAND.</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    </div>
     </div>
  )
}

export default Home 