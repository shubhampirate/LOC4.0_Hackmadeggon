// import React, { useState,useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { AiFillFacebook } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useFormik } from "formik";
// import axios from "axios";

// function signin() {
//   const [students, setStudents] = useState([])
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const handleLogin = (email: string, password: string) => {
//     //
//   };
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       setLoading(true);
//       handleLogin(values.email, values.password);
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().trim().required("username is required"),
//       password: Yup.string().trim().required("password is required"),
//     }),
//   });
//     useEffect(()=>{
//       async function getAllStudent(){
//         try {
//           const user = await axios.post("http://127.0.0.1:8000/login")
//           console.log(user.data)
//           setStudents(user.data)
//         } catch (error) {
//           console.log(error)
//         }
//       }
//       getAllStudent()
//     }, [])
  
//     return (
//     <div>
//       <div className="relative w-full h-screen bg-zinc-900">
//         <div className="flex justify-center items-center h-full">
//           <form className="max-w-[400px] w-full mx-auto bg-white p-8">
//             <h2 className="text-4xl font-bold text-center py-4">BRAND.</h2>
//             <div className="flex justify-between py-8">
//               <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
//                 <AiFillFacebook className="mr-2" /> Facebook
//               </p>
//               <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
//                 <FcGoogle className="mr-2" /> Google
//               </p>
//             </div>
//             <div className="flex flex-col mb-4">
//               <label>E-mail</label>
//               <input className="border relative bg-gray-100 p-2" type="email" placeholder="Email" name="email" value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}/>
//               {formik.errors.email ? <div>{formik.errors.email}
//             </div>:
//             <div className="flex flex-col ">
//               <label>Password</label>
//               <input
//                 className="border relative bg-gray-100 p-2"
//                 type="password"
//               />
//             </div>
//             <Link to="/new"><button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white">
//               Sign In
//             </button></Link>
//             <p className="flex items-center mt-2">
//               <input className="mr-2" type="checkbox" />
//               Remember Me
//             </p>
            
//             <div className="text-center mt-8" >
//             <Link to="/signup">Not a member? Signup
//             </Link> 
//             </div>
//           </form>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default signin;
// /**/

import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";

function Login() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (email: string, password: string) => {
    //
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleLogin(values.email, values.password);
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("Le nom d'utilisateur est requis"),
      password: Yup.string().trim().required("Le mot de passe est requis"),
    }),
  });

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <input
              className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email ? <div>{formik.errors.email} </div> : null}
            <input
              className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password ? (
              <div>{formik.errors.password} </div>
            ) : null}
          </div>
          <div className="text-danger text-center my-2" hidden={false}>
            {message}
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="rounded border-gray-300 p-2 w-32 bg-blue-700 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;