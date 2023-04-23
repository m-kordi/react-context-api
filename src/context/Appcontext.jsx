import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const Mycontext=createContext();
Mycontext.displayName="contOwn";

export const Addvancedcontext=createContext();
Addvancedcontext.displayName="contTow";

function Appcontext(props) {
    const myval="Global context api value";

    const[name, setName]=useState("mohsen");
    const addvanced={name,setName}
  return (
    <>
    <Mycontext.Provider value={myval}>
        <Addvancedcontext.Provider value={addvanced}>
        {props.children}
        </Addvancedcontext.Provider>
    </Mycontext.Provider>
    
    </>
  )
}

export default Appcontext