import React,{useState} from 'react'
import ReactMapGL from "react-map-gl"
function map() {
    const [viewport, setViewport] = useState({
        latitude:37.7577,
        longitude:-122.4376,
        zoom:8,
        width:windowinnerWidth,
        height:windowinnerHeight

    })
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