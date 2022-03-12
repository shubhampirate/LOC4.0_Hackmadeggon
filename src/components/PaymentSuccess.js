import React from 'react'
import {Link} from 'react-router-dom'
function PaymentSuccess() {
  return (
    <div>
        Payment Successful
        <button><Link to="/new">Return to Home Page</Link></button>
    </div>
  )
}

export default PaymentSuccess