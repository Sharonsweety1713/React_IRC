import Nav from'./Components/Nav'
import Home from'./Components/Home'
 import Signin from'./Components/Signin'
 import Signup from'./Components/Signup'
import './Asserts/css/Nav.css'
import './Asserts/css/Signupstyle.css'
import './Asserts/css/Signinstyle.css'
import './Asserts/css/Home.css'
 import { Route, Routes } from 'react-router-dom';
 
function App(){
  return(
    <>
        
     <Nav/>
     <Routes>
      <Route path="/Home"element={<Home/>}/>
      <Route path="/Signin"element={<Signin/>}/>
      <Route path="/Signup"element={<Signup/>}/>
     </Routes>
    
    </>
  )
}
export default App