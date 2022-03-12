import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <div>
      <div>
              <div className="relative w-full h-screen bg-zinc-900">
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h2 className="text-4xl font-bold text-center py-4">BRAND.</h2>
            <div className="flex justify-between py-8">
              <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                <AiFillFacebook className="mr-2" /> Facebook
              </p>
              <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                <FcGoogle className="mr-2" /> Google
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <label>done</label>
              <input className="border relative bg-gray-100 p-2" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
              />
            </div>
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white">
              Sign In
            </button>
            <p className="flex items-center mt-2">
              <input className="mr-2" type="checkbox" />
              Remember Me
              </p>
          </form>
        </div>
      </div>
        
    </div>
                  <div className="relative w-full h-screen bg-zinc-900">
                  <div className="flex justify-center items-center h-full">
                    <form className="max-w-[400px] w-full mx-auto bg-white p-8">
                      <h2 className="text-4xl font-bold text-center py-4">BRAND.</h2>
                      <div className="flex justify-between py-8">
                        <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                          <AiFillFacebook className="mr-2" /> Facebook
                        </p>
                        <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                          <FcGoogle className="mr-2" /> Google
                        </p>
                      </div>
                      <div className="flex flex-col mb-4">
                        <label>Username</label>
                        <input className="border relative bg-gray-100 p-2" type="text" />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label>E-mail</label>
                        <input className="border relative bg-gray-100 p-2" type="text" />
                      </div>
                      <div className="flex flex-col ">
                        <label>Password</label>
                        <input
                          className="border relative bg-gray-100 p-2"
                          type="password"
                        />
                      </div>
                      <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white">
                      <div className="flex flex-col ">
                        <label>Confirm Password</label>
                        <input
                          className="border relative bg-gray-100 p-2"
                          type="password"
                        />
                      </div>
                      <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white">
                        Sign Up
                      </button>
                      <p className="flex items-center mt-2">
                        <input className="mr-2" type="checkbox" />
                        Remember Me
                        </p>
                    </form>
                  </div>
                </div>
                </div>
  )
}

export default Signup