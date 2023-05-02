import React from 'react'
import './Apps.css'

export default function Squaree(props) {
  return (
    <div className='squaree' onClick={props.onclick}>{props.value}</div>
  )
}
