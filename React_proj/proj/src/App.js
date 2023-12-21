import Nav from'./Components/Nav'
import Homepage from'./Components/Homepage'
import Signin from'./Components/Signin'
import Signup from'./Components/Signup'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Explore from './Components/Explore'
import Jobs from'./Components/Jobs'
import './Asserts/css/Nav.css'
import './Asserts/css/Signupstyle.css'
import './Asserts/css/Signinstyle.css'
import './Asserts/css/Home.css'
import './Asserts/css/Dashboard.css'
import './Asserts/css/Profile.css'
import './Asserts/css/Explore.css'
import './Asserts/css/Jobs.css'
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
      <Route path="/Profile"element={<Profile/>}/>
      <Route path="/Explore"element={<Explore/>}/>
      <Route path="/Jobs"element={<Jobs/>}/>
     </Routes>
    
    
    </>
  )
}
export default App