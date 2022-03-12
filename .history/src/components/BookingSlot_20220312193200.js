import React from 'react'

function BookingSlot() {
  return (
    <div>
        <div className="relative w-full h-screen bg-no-repeat bg-cover"  style={{backgroundImage: "url(https://www.hdnicewallpapers.com/Walls/Big/Abstract/Natural_Sea_Abstract_5K_Blur_Wallpaper.jpg)"}}>
        <div className="border-black flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h2 className="text-4xl font-bold text-center py-4">Seminar</h2>
            <div className="flex flex-col mb-4">
              <label>Username</label>
              <input className="border relative bg-gray-100 p-2" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Seminar Name</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
              />
              </div>
              <div className="pt-4"></div>
            
            <div className="flex flex-col mb-4">
              <label>At Ngo Name</label>
              <input className="border relative bg-gray-100 p-2" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Maximum seats available</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
              />
              </div>
              <div className="pt-4"></div>
              <div className="flex flex-col mb-4">
              <label>Date and time</label>
              <input className="border relative bg-gray-100 p-2" type="text" />
            </div>
          
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white"> Book Slot 
            </button>           
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default BookingSlot