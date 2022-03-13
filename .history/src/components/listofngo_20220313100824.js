import React from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.jpeg"
function Listofngo() {
  return (
    <div>
        <div className="items-center pl-56 ml-80">
        <div className="h-13 "><img classname="items-center" src={logo}/></div>
        </div>
        <div className="">
            <h1 className="text-center pr-20 text-7xl"> Best Ngos in Mumbai</h1>     
            </div>
      {/* <div className="flex  text-center"> 
            <div className=""><h1 className="text-center">NGOS </h1></div>
            <div className="text-center mr-8"><Link to="/payment">SERVICES </Link></div>
        </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">1.Akshara Centre </Link></div>
            <div className=""><Link to="/payment">Education </Link></div>
            </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">2. ALERT-INDIA Association for Leprosy education, Rehabilitation & Treatment India </Link></div>
            <div className=""><Link to="/payment">Health </Link></div>
            </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">3. Annamrita-ISKCON Food Relief Foundation </Link></div>
            <div className=""><Link to="/payment">Children </Link></div>
            </div>
            
      <div className="flex"> 
            <div className=""><Link to="/payment">4. Antarang Foundation </Link></div>
            <div className=""><Link to="/payment">Education </Link></div>
            </div>
            
      <div className="flex "> 
            <div className=""><Link to="/payment">5. Ashadeep Association </Link></div>
            <div className=""><Link to="/payment">Children</Link></div>
            </div>
       </div> */}
       <br />
       <br />
       <table class="table-auto w-full">
  <thead>
    <tr>
      <th>Song</th>
      <hr />
      <th>Artist</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      
    </tr>
  </tbody>
</table>

        <div className='grid grid-cols-1 sm:grid-cols-2 h-auto w-full'>
        <div className='hidden sm:block'>
            <h1 className="text-5xl text-center">NGO </h1> <hr />
            <div className="text-left text-3xl pl-10"><Link to="/payment">1. Akshara Centre </Link></div><hr />
            <div className="text-left text-3xl pl-10"><Link to="/payment"> 2.  ALERT-INDIA Association Rehabilitation Treatment </Link></div> <hr />
            <div className="text-left text-3xl pl-10"><Link to="/payment">  3.  Annamrita-ISKCON Food Relief Foundation</Link></div> <hr />
            <div className="text-left text-3xl pl-10"><Link to="/payment"> 4.  Antarang Foundation  </Link></div> <hr />
            <div className="text-left text-3xl pl-10"><Link to="/payment"> 5.  Ashadeep Association </Link></div> <hr/>

                    </div>

        <div className=' flex flex-col justify-between'>
          <h1 className='text-5xl text-left'>SERVICES </h1><hr />
          <div className="text-3xl ">Education</div><hr />
          <div className="text-3xl">Health</div> <hr />
          <div className="text-3xl">Children</div> <hr />
          <div className="text-3xl">Education</div> <hr/>
          <div className="text-3xl">Children</div> <hr />
    
       
        </div>
        </div>
     
    </div>
  )
}

export default Listofngo