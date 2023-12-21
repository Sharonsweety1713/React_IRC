import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validation = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please fill in both fields', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (username === 'sharon' && password === '1713') {
      toast.success("Sign In Successful!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        window.location.href = '/Dashboard';
      }, 2000);
    } else {
      toast.error('Invalid Username / Password', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">

            <form class="sign-in-form" onSubmit={validation}>
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button className="btn-custom" id="sign-up-btn" type="submit" onClick = {validation}>
                Sign In
              </button>
            </form>

          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
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

              {/* <Link to="/Dashboard">
                <button className="btn-custom" id="sign-up-btn" >
                  Sign in
                </button>
              </Link> */}
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              className="image"
              alt="1 Pic"
            />
          </div>
        </div>
      </div>


    </>
  );
};

export default Signin;
