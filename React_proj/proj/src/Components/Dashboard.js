import { Link } from 'react-router-dom'
import React from 'react';
const Dashboard=()=>{
    const handleSupportClick = () => {

    }
    return(
      <>
        <ul class="sidebar">
     <Link to="/Profile">
      <li class="sidebar-brand"><a href="#">Create Profile</a></li>
      </Link>
      <li><a href="#">About</a></li>
      <li><a href="#">Feedback</a></li>
      <Link to="/Homepage">
      <li>Logout</li>
      </Link>
      <button onClick={handleSupportClick} class="bbttnn">Support</button>
      </ul>
      </>

    )
}
export default Dashboard