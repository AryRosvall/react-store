/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import handleCartTotal from '../utils/handleCartTotal'
import '../styles/components/Checkout.css'

function Checkout() {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext)

  const handleRemoveFromCart = (product) => () => {
    removeFromCart(product)
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.map((product) => (
          <div className="Checkout-item" key={product.id}>
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
            <button type="button" onClick={handleRemoveFromCart(product)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${handleCartTotal(cart)}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
