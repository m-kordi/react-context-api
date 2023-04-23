import React from 'react'
import { Mycontext } from '../context/Appcontext'
import { useContext } from 'react'

function New() {
  const newmethod =useContext(Mycontext);
  return (
    <>
    <br />
    {`this is the new way and this is ${newmethod}`}
    </>
  )
}

export default New