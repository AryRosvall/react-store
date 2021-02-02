/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

function Product({ product, handleAddToCart }) {
  const { title, image, price, description } = product

  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Product-item-info">
        <h2>{title}</h2>
        <span>${price}</span>
        <p className="Product-description">{description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  )
}

export default Product
