import React, { useState,useEffect } from "react";
import logo from "./logo.jpeg" 
import { Link } from "react-router-dom";
import axios from "axios";

function signin() {
    return (
    <div>
      <div className="relative w-full h-screen bg-no-repeat bg-cover"  style={{backgroundImage: "url(https://cdn.weashare.com/wp-content/uploads/2020/05/payment-gateway-nulled-demo-680x350.png)"}}>
        <div className="border-black flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <div className="h-15"><img classname="h-10" src={logo}/></div>
            <div className="flex flex-col mb-2">
              <label>E-mail</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Ngo Name</label>
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
            <Link to="/new">
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white" onClick={()=>{ alert('Thank you for contributing for billions of smiles worldwide'); }}> Pay
            </button>  
            </Link>         
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