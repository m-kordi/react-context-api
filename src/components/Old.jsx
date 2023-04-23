import React from 'react'
import { Mycontext } from '../context/Appcontext'

function Old() {
  return (
    <>
    <Mycontext.Consumer>
      {(myval)=>{
          return (`this is the old way and this is ${myval}`)
      }}
    </Mycontext.Consumer>
    </>
  )
}

export default Old