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
    <div></div>
  )
}

export default map