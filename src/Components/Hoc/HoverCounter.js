import React,{useState} from 'react'
import HocComponent from './HocComponent'

const HoverCounter = (props) => {
 
    
  return (
    <div>HoverCounter:{props.Counter}
     <div><button onMouseOver={props.updateCounter}>Click!</button></div>
    </div>
  )
}

export default HocComponent(HoverCounter) 