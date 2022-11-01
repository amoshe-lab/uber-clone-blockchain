import React, { useEffect } from 'react'
import mapboxgl from "mapbox-gl"
const style = {
  wrapper: 'flex-1 h-full w-full',
}
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
 
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: 'Map',
        style: '',
        center: [-78.38671,56.36475],
        zoom: 3,
      })

    }, [])  
    return (
      <div className={style.wrapper}>
   </div>
  )
}

export default Map