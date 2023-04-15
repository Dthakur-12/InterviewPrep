import React,{useState} from 'react'
import HocComponent from './HocComponent'

const ClickCoutner = (props) => {
  return (
    <div>ClickCoutner: {props.Counter}
    <div><button onClick={props.updateCounter}>Click!</button></div>
        </div>
  )
}

export default HocComponent(ClickCoutner)