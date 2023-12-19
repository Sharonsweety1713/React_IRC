import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
  
  const Sucess = () => toast("Your one Step closer! Signed In")
  // toast.success('Your one Step closer! Signed In', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   });
  return (
    <>
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
            <h3 className="tit">New To Our Website ?</h3>
            <h4 className="tittext">Sign Up to Explore the world of possibilities</h4>
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
            
            <Link to="/Dashboard">
            <button className="btn-custom" id="sign-up-btn"  onClick={Sucess}>
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
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
   </>
  );
};

export default Signin;
