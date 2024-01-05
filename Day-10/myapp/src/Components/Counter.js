import{useState} from 'react'
const Counter=()=>{
    const[data,setData]=useState(0)
    const increase=()=>{setData(data+1)}
    const decrease=()=>{setData(data-1)}
    return(
<>
<button onClick={increase}>+</button>
<h2>Count:{data}</h2>
<button onClick={decrease}>-</button>
</>
    )
}
export default Counter;