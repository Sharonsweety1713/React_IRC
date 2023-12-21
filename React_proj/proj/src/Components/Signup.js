import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit=(e)=>
  {
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
    }
    else{
      toast.success("🎉Yay! Your one Step closer", {
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
    }
    
  }
  return (
    <div className="container-custom sign-up-mode">
      <div className="forms-container-custom">
        <div className="signin-signup-custom">
        
              
          <form className="sign-in-form-custom" onSubmit={handleSubmit}>
            <h2 className="title-custom">Sign Up</h2>
            <div className="input-field-custom">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} required
              />
            </div>
            <div className="input-field-custom">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"

               
              />
            </div>
            <div className="input-field-custom">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

           
            <button className="btn-custom" id="sign-up-btn" onClick={handleSubmit}>
              Sign up
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
    </div>
  );
};

export default Signup;

