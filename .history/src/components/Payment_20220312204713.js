import React, { useState,useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function signin() {
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
            <div className="flex flex-col mb-4">
              <label>E-mail</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>At Ngo Name</label>
              <input className="border relative bg-gray-100 p-2" type="text" />
            </div>
        
            <div className="flex flex-col mb-4 ">
              <label>Card Number</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
              />
              </div>
              
            <div className="flex flex-col mb-4 ">
              <label>CVV</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label>Amount in Rupees</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
              />
            </div>
          
            <button className="w-full py-3 mt-5 bg-indigo-600 hover:bg-indigo-900 relative text-white"> Submit
            </button>           
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default signin;
/*const [students, setStudents] = useState([])
    useEffect(()=>{
      async function getAllStudent(){
        try {
          const students = await axios.get("http://127.0.0.1:8000/api/student/")
          console.log(students.data)
          setStudents(students.data)
        } catch (error) {
          console.log(error)
        }
      }
      getAllStudent()
    }, [])
  */