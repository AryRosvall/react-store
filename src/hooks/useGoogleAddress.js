import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../config/config'

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({})

  const API = `http://api.positionstack.com/v1/forward?query=${address}&access_key=${config.clientIdPositionStack}&limit=1`

  useEffect(async () => {
    const response = await axios(API)

    const location = {
      lat: response.data.data[0].latitude,
      lng: response.data.data[0].longitude,
    }
    console.log(
      '🚀 ~ file: useGoogleAddress.js ~ line 11 ~ useEffect ~ response',
      location
    )
    setMap(location)
  }, [])

  return map
}

export default useGoogleAddress
