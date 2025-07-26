import React from 'react'
import './LavangeCards.css'

function LavangeCards({logo,name,onClick}) {
  return (
    <div className='lvgcard' onClick={()=>onClick()}>
        <img src={logo} alt="" />
        <span>{name}</span>
    </div>
  )
}

export default LavangeCards
