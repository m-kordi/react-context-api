import React from 'react'
import { Addvancedcontext } from '../context/Appcontext'
import { useContext } from 'react'


function Addvanced() {
    const {name,setName}=useContext(Addvancedcontext);

    function changname(){
        setName("Ahmed")
    }
  return (
    <>
    <br />
    <br />
    <button onClick={changname}>chang name globaly</button>
    <h3>{name}</h3>
    </>
    
  )
}

export default Addvanced