import Signin from './components/Signin'
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import New from "./components/New"
import Booking from "./components/Booking"
import Payment from "./components/Payment"
import Home from './components/Home ';
import BookingSlot from "./components/BookingSlot"
//import Sidebar from "./components/Sidebar"
function App() {
  return <div>
      <div >
      
      <Router>
     
      <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/new" element={<New/>}/>
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/> */}
          </Routes>
      </Router>

           </div>
  </div>;
}

export default App;
/* <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
    </div>
   <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
 <div className='w-full h-[550px] hidden md:block'>
        <img className='w-full h-full' src={trees} alt="/" />
    </div>
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

 // option 2
     
// option 3
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
    */
