import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL from "react-map-gl"
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhaHNodWJoYW0wMjQiLCJhIjoiY2wwb2ozcHQyMXAwZjNkbnM3eW1jYnQ1MCJ9.mP4xhm0tyNxEHZt1HQ2rhQ';
function Map() {
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
        <div className="">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="h-96" />
</div>
  )
}

export default Map