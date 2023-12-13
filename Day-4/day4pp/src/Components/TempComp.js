import{useState} from 'react'
const TempComp=()=>
{
    const[data,setData]=useState({
        name:'',
        pass:''
    })
    const handleChange=(a)=>{
       setData({...data,[a.target.id]:a.target.value})
       console.log(data)
    }
   const handleSubmit=(a)=>{
    a.preventDefault()
    alert('submited')
    console.log("final data")
    console.log(data)
   }
    return(
        <>
       <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" id="name" onChange={handleChange}/>
        <input type="password" placeholder="password" id="pass" onChange={handleChange}/>
        <input type="submit" value="Login"/>
       </form>
        </>
    )
}
export default TempComp