/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext)

  const form = useRef(null)
  const history = useHistory()

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    }
    addToBuyer(buyer)
    history.push('/checkout/payment')
  }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <label htmlFor="name">
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                id="name"
              />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" placeholder="Email" name="email" id="email" />
            </label>
            <label htmlFor="address">
              Address
              <input
                type="text"
                placeholder="Address"
                name="address"
                id="address"
              />
            </label>
            <label htmlFor="apto">
              APT
              <input type="text" placeholder="APT" name="apto" id="apto" />
            </label>
            <label htmlFor="country">
              Country
              <input
                type="text"
                placeholder="Country"
                name="country"
                id="country"
              />
            </label>
            <label htmlFor="state">
              State
              <input type="text" placeholder="State" name="state" id="state" />
            </label>
            <label htmlFor="city">
              City
              <input type="text" placeholder="City" name="city" id="city" />
            </label>
            <label htmlFor="cp">
              Postal Code
              <input type="text" placeholder="Postal Code" name="cp" id="cp" />
            </label>
            <label htmlFor="phone">
              Phone
              <input type="text" placeholder="Prone" name="phone" id="phone" />
            </label>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Go Back</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pay
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order Summary:</h3>
        {cart.map((product) => (
          <div className="Information-item">
            <div className="Information-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
