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

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
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
