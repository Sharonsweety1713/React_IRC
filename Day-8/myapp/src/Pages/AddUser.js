import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Servicse/api'
const AddUser = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        Username: '',
        Password: ''
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addUser(data)
            if (res.status === 201) {
                alert('user added')
            }
            navigate('/')
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' id='Username' placeholder='Username' onChange={handleChange} />
                <input type='password' id='Password' placeholder='Password' onChange={handleChange} />
                <button type='submit'>Submit</button>

            </form>


        </>
    )
}
export default AddUser;