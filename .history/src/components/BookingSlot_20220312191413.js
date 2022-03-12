import React from 'react'

function BookingSlot() {
  return (
    <div>
        <div className="relative w-full h-screen bg-no-repeat bg-cover"  style={{backgroundImage: "url(https://www.hdnicewallpapers.com/Walls/Big/Abstract/Natural_Sea_Abstract_5K_Blur_Wallpaper.jpg)"}}>
        <div className="border-black flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h2 className="text-4xl font-bold text-center py-4">NGO</h2>
            <div className="flex flex-col mb-4">
              <label>Username</label>
              <input className="border relative bg-gray-100 p-2" type="text" />
            </div>
//dropdown
<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


<div id="dropdownInformation" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <div class="py-3 px-4 text-gray-900 dark:text-white">
      <span class="block text-sm"></span>
    </div>
    <ul class="py-1" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"></a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>            







            <div className="flex flex-col ">
              <label>Card Number</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
              />
              </div>
              <div className="pt-4"></div>
            <div className="flex flex-col">
              <label>CVV</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
              />
            </div>
          
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white"> Submit
            </button>           
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default BookingSlot