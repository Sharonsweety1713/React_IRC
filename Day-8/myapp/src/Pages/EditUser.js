import React from 'react'
import{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { getUserId } from '../Servicse/api'
const EditUser=()=>{
   const {id}=useParams()
   const navigate=useNavigate()
        const[data,setData]=useState({
            Username:'',
            Password:''
    })
    const fetchUser=async()=>{
        try{
const res=await getUserId(id)
setData(res.data)
        }
        catch(e)
        {
            console.log(e)
        }
    }
        const handleChange=(e)=>{
            setData({...data,[e.target.id]:e.target.value})
        }
        const handleSubmit=async(e)=>{
    e.preventDefaut();
    try{
        const res2=await EditUser(id,data)
        console.log(res2.status)
        if(res2.status===200)
        alert("user updated")
    navigate('/')
    }
    catch(e)
    {
    console.log(e)
    }
    }
    useEffect(()=>{
        fetchUser()
    })
    
        return (
            <>
           <form onSubmit={handleSubmit}>
            <input type='text' id='Username' value={data.Username} placeholder='Username' onChange={handleChange}/>
            <input type='password' id='Password' value={data.Password}placeholder='Password' onChange={handleChange}/>
            <button type='submit'onSubmit={handleChange}>Submit</button>
            
           </form>
            
    
            </>
        )
}
export default EditUser