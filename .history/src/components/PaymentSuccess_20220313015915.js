import React from 'react'
import {Link} from 'react-router-dom'
function PaymentSuccess() {
  return (
    <div 
         style={{backgroundImage: "url()"}}>
        <button><Link to="/new">Return to Home Page</Link></button>
    </div>
  )
}

export default PaymentSuccess