import React from 'react'
import {Link} from 'react-router-dom'
function PaymentSuccess() {
  return (
    <div className="">
        <img src="https://phppot.com/wp-content/uploads/2018/03/sage-payment-success.png" alt={PaymentSuccess}/>
        <button className="shadow-2xl"><Link to="/new">Return to Home Page</Link></button>
    </div>
  )
}

export default PaymentSuccess