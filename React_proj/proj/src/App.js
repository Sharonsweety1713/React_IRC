 import Nav from'./Components/Nav'
 import Homepage from'./Components/Homepage'
 import Signin from'./Components/Signin'
 import Signup from'./Components/Signup'
import Dashboard from './Components/Dashboard'
// import Footer from './Components/Footer'
import './Asserts/css/Nav.css'
import './Asserts/css/Signupstyle.css'
import './Asserts/css/Signinstyle.css'
import './Asserts/css/Home.css'
import './Asserts/css/Dashboard.css'
// import './Asserts/css/Footer.css'
 import { Route, Routes } from 'react-router-dom';

 
function App(){
  return(

    <>
     <Nav/>
    <Routes>
      <Route path="/Homepage"element={<Homepage/>}/>
      <Route path="/Signin"element={<Signin/>}/>
      <Route path="/Signup"element={<Signup/>}/>
      <Route path="/Dashboard"element={<Dashboard/>}/>
     </Routes>
     {/* <Footer/> */}
    
    </>
  )
}
export default App