/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import useGoogleAddress from '../hooks/useGoogleAddress'
import Map from '../components/Map'
import '../styles/components/Success.css'

// https://maps.googleapis.com/maps/api/js?key=AIzaSyD1M3x2jPBRObBsHKvl3YRmFGfhc2jQ7Ro&callback=initMap

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext)

  const address = `${buyer[0].address} ${buyer[0].apto} ${buyer[0].city} ${buyer[0].country}, ${buyer[0].cp} `
  const location = useGoogleAddress(address)

  return (
    buyer.length > 0 && (
      <div className="Success">
        <div className="Success-content">
          <h2>{buyer[0].name}, Gracias por tu compra</h2>
          <span>Tu pedido llegara en 3 dias a tu dirección:</span>
          <div className="Success-map">
            <Map data={location} />
          </div>
        </div>
      </div>
    )
  )
}

export default Success
