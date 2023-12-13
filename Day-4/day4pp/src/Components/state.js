// import React from 'react'
import {useState} from 'react'
const state = () =>{
    const[visible,setVisible]=useState(false);
    const toggle=()=>{
        setVisible(!visible)
    }
    return(
        <>
        {visible? <div>Visible</div>:''}
        <button onClick={toggle}>
        {visible? 'hide':'show'}
        </button>
        </>
    )
}
export default state;