import logo from './logo.svg';
import './App.css';
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
function App() {
  return (
// option 1
/*<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
   

    <div className='bg-gray-500 flex flex-col justify-center'>
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
*/
// // option 2
// <div className='relative w-full h-screen bg-zinc-900'>
            

//     <div className='flex justify-center items-center h-full'>
//         <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
//             <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
//             <div className='flex justify-between py-8'>
//                 <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
//                 <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Username</label>
//                 <input className='border relative bg-gray-100 p-2' type="text" />
//             </div>
//             <div className='flex flex-col '>
//                 <label>Password</label>
//                 <input className='border relative bg-gray-100 p-2' type="password" />
//             </div>
//             <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-900 relative text-white'>Sign In</button>
//             <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
//             <p className='text-center mt-8'>Not a member? Sign up now</p>
//         </form>
//     </div>
//     </div>
<div className='w-full h-screen flex'>
<div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
    <div className='p-4 flex flex-col justify-around'>
        <form>
            <h2 className='text-4xl font-bold text-center mb-8'>BRAND.</h2>
            <div>
                <input className='border p-2 mr-2' type="text" placeholder='Username' />
                <input className='border p-2' type="password" placeholder='Password' />
            </div>
            <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign In</button>
            <p className='text-center'>Forgot Username or Password?</p>
        </form>
        <p className='text-center'>Sign Up</p>
    </div>
</div>
</div>
  );
}

export default App;
/* <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
    </div>
   <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
 <div className='w-full h-[550px] hidden md:block'>
        <img className='w-full h-full' src={trees} alt="/" />
    </div>
    
    */