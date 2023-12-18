
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { UserPlus } from 'lucide-react';


const Nav = () => {
  // const [isLogoutSuccessful, setIsLogoutSuccessful] = useState(false);

//   const handleLogout = () => {
    
// alert("You have logged out succesfully")
   
  // };

  return (
    <header>
      <div className="navWrapper" id="home">
        <div className="clearfix">
          <h2 className="companyName">Wander Weavers</h2>
          <nav className="mainNav clearfix">
            <ul >
              <Link to="/Homepage">
                <li className="ico">
                  <Home/>
                   
                </li>
              </Link>
              <Link to="/Signin">
                <li className="ico">
                <LogIn/>
                   </li>
              </Link>
              <Link to="/Signup">
                <li className="ico">
                <UserPlus/>
                 
                </li>
              </Link>
             </ul>
          </nav>
        </div>
      </div>

       
    </header>
  );
};

export default Nav;
