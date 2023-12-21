import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {getUser,DeleteUser} from'../Servicse/api'
const User=()=>{
    const navigate=useNavigate()
    const [user, setUser] = useState([])
    const fetchData = async () => {
        try {
            const res = await getUser()
            setUser(res.data);
            console.log(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
   

    useEffect(() => {
        fetchData()
    }, [])


    const handleDelete = async(id) => {
        try {
            const res = await DeleteUser(id)
            if (res.status === 200)
                alert('deleted')
            fetchData();
            
        }
        catch (e) {
            console.log(e);
        }
    }
    const handleEdit=(id)=>{
      navigate(`/edit/${id}`)
    }
    useEffect(()=>{
        fetchData();
    })
    return (
        <>
        <table>
            <thread>
                <tr>
                    <th>
                      Username  
                    </th>

                    <th>
                      Password
                    </th>
                    <th>
                     Edit
                    </th>
                    <th>
                    Delete
                    </th>
                </tr>
            </thread>
            <tbody>

                {user.map((user)=>(

             <tr key = {user.id}>
                  <td>{user.Username}</td>  
                  <td>{user.Password}</td>  
                  <td>
                    <button onClick={()=>handleEdit(user.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
                    ))
                }
            </tbody>
        </table>

        </>
    )
}
export default User;