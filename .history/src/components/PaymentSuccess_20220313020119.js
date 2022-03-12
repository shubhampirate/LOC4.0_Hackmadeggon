import React from 'react'
import {Link} from 'react-router-dom'
function PaymentSuccess() {
  return (
    <div className="h-screen">
        <img src="https://phppot.com/wp-content/uploads/2018/03/sage-payment-success.png"/>
        <button><Link to="/new">Return to Home Page</Link></button>
    </div>
  )
}

export default PaymentSuccess