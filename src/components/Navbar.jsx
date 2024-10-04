import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const count = useSelector((state)=>state.counter.value)
  return (
    <div>This is counter in Navbar component {count}</div>
  )
}

export default Navbar