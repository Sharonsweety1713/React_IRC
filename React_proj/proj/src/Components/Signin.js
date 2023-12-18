import React from 'react';
import { Link } from 'react-router-dom';
const Signin = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign In </h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Link to="/Dashboard">
            <button className="btn-custom" id="sign-up-btn">
              Sign In
            </button>
              </Link>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New To Our Website ?</h3>
            <p>Sign Up to Explore the world of possibilities...</p>
                <li>
                   <Link to="/Signup">
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
              </Link> 
                  
                </li>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            className="image"
            alt="2nd Pic"
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Click the Sign In to see the effect</p>
            {/* <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button> */}
            <Link to="/Dashboard">
            <button className="btn-custom" id="sign-up-btn">
              Sign in
            </button>
              </Link>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            className="image"
            alt="1 Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
