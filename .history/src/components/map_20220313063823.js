import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL from "react-map-gl"
import mapboxgl from '!mapbox-gl';
function map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });
  return (
    <div>
        <ReactMapGL 
        mapboxAccessToken='pk.eyJ1Ijoic2hhaHNodWJoYW0wMjQiLCJhIjoiY2wwb2ozcHQyMXAwZjNkbnM3eW1jYnQ1MCJ9.mP4xhm0tyNxEHZt1HQ2rhQ'>
            {...viewport}
            onViewChange={(newView)=>setViewport(newView)}
        </ReactMapGL>
    </div>
  )
}

export default map