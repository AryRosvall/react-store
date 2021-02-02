/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button'
import AppContext from '../context/AppContext'
import config from '../config/config'
import handleCartTotal from '../utils/handleCartTotal'
import '../styles/components/Payment.css'

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext)

  const paypalOptions = {
    clientId: config.clientIdPaypal,
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const history = useHistory()

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      }

      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>

        {cart.map((item) => (
          <div className="Payment-Item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleCartTotal(cart)}
            onPaymentStart={() => console.log('start payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log('payment error', error)}
            onPaymentCancel={(data) => console.log('payment cancel', data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment
