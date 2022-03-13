import React, { useState,useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.jpeg"
function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(initialState)
    const navigate=useNavigate();
    const handleSubmit=(event) => {
      event.preventDefault();
      var formdata= new FormData();
      formdata.append("email",email)
      formdata.append("password",password)
      fetch("http://127.0.0.1:8000/login/",{
        method: "POST",
        body: formdata,
      })
      .then((response)=>response.json())
      .then((result) =>{ 
        result.token ? navigate("/new"):navigate("/signup")
        localStorage.setItem("token", result.token)
      })
      .catch((error) =>{
        console.log(error);
        alert("Invalid Credentials")
      })
    }

    return (
    <div>
      <div className="relative w-full h-screen bg-zinc-900">
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h2 className="text-4xl font-bold text-center py-4"> <div className="h-15"><img classname="h-10" src={logo}/></div></h2>
            <div className="flex justify-between py-8">
              <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                <AiFillFacebook className="mr-2" /> Facebook
              </p>
              <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                <FcGoogle className="mr-2" /> Google
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input className="border relative bg-gray-100 p-2" type="email"  />
            </div>
            <div className="flex flex-col ">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                
              />
            </div>
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white" onClick={=>{handleSubmit}}>
              Sign In
            </button>
            <p className="flex items-center mt-2">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            
            <div className="text-center mt-8" >
            <Link to="/signup">Not a member? Signup
            </Link> 
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Signin;
/**/