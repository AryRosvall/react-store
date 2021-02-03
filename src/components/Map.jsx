/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import config from '../config/config'
import '../styles/components/Success.css'

const Map = ({ data }) => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  }
  console.log(data)
  const defaultCenter = {
    lat: data.lat || 37.68739,
    lng: data.lng || -121.9131115,
  }

  return (
    <LoadScript googleMapsApiKey={config.clientIdGoogleMaps}>
      <GoogleMap mapContainerStyle={mapStyle} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
