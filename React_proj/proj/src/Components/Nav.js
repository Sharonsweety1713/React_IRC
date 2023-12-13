
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  const [isLogoutSuccessful, setIsLogoutSuccessful] = useState(false);

  const handleLogout = () => {
    
alert("You have logged out succesfully")
   
  };

  return (
    <header>
      <div className="navWrapper" id="home">
        <div className="clearfix">
          <h2 className="companyName">Wander Weavers</h2>
          <nav className="mainNav clearfix">
            <ul>
              <Link to="/Home">
                <li>
                  <a href="#home">Home</a>
                </li>
              </Link>
              <Link to="/Signin">
                <li>
                  <a href="#signin">Sign In</a>
                </li>
              </Link>
              <Link to="/Signup">
                <li>
                  <a href="#signup">Sign Up</a>
                </li>
              </Link>
              <li>
                <a href="#logout" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

       
    </header>
  );
};

export default Nav;
