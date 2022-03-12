import React from 'react'
import 
function Payment() {
  return (
    <div className="checkout">
                <h1>Confirm Payment</h1>
                <input name="name" type="text" placeholder="Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <CardElement />
                <div id="billed">
                    <h4>Total billed:</h4>
                    <h4 id="quantity">20€</h4>
                </div>
                <div id="extra-actions">
                    <Checkbox key="remember" className="remember">Remember me</Checkbox>
                    <Checkbox key="subscribe" className="subscribe" onChange={this.onSubscribe}>Subscribe MONTHLY</Checkbox>
                </div>
                <button onClick={this.submit}>Send</button>
            </div>
  )
}

export default Payment