import { Link } from 'react-router-dom'
import React from 'react';
const Dashboard=()=>{
   
    return(
      <>
        <ul class="sidebar">
     <Link to="/Profile">
      <li class="sidebar-brand"><a href="#">Create Profile</a></li>
      </Link>
      <Link to="/Explore">
      <li><a href="#">Explore</a></li>
      </Link>
      <li><a href="#">Feedback</a></li>
      <div className='out'>
      <Link to="/Homepage">
      <li>Logout</li>
      </Link>
      </div>
      </ul>
      </>

    )
}
export default Dashboard