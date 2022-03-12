import React, { useState,useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function signin() {
    return (
    <div>
      <div className="relative w-full h-screen bg-zinc-900">
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h2 className="text-4xl font-bold text-center py-4">BRAND.</h2>
            <div className="flex justify-between py-8">  
            </div>
            <div className="flex flex-col mb-4">
              <label>Username</label>
              <input className="border relative bg-gray-100 p-2" type="text" />
            </div>
            <div id="flex flex-col ">
              <label>E-mail</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
              />
            </div>
            </div>
            <div id="flex flex-col ">
              <label>Card Number</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
              />
              </div>
            <div id="flex flex-col ">
              <label> cvv</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
              />
            </div>
            </div>
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white">
             <Link to="/home"> Sign In</Link>
            </button>
            <p className="flex items-center mt-2">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            
            <div className="text-center mt-8" >
            <Link to="/">Not a member? Signup
            </Link> 
            </div>
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