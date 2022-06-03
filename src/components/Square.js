import React from 'react'
import '../styles/App.css'
import '../styles/square.css'

function Square({val, ChooseSquare}) {
  return (
    <div className='square' 
    onClick={ChooseSquare}>
        {val}
    </div>
  )
}

export default Square