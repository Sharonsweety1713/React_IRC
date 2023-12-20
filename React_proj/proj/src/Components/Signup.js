import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const errors = {};
    let allFieldsFilled = true;

    for (const field in formData) {
      if (!formData[field].trim()) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        allFieldsFilled = false;
      }
    }

    if (!allFieldsFilled) {
      // Display alerts for each empty field
      for (const field in errors) {
        window.alert(errors[field]);
      }
    } else {
      // If all fields are filled, display success message
      console.log('Signing up:', formData);
      window.alert('Your all set to go!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
                value={formData.username}
                onChange={handleChange} 
              />
            </div>
            <div className="input-field-custom">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field-custom">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <Link to="/Dashboard">
            <button className="btn-custom" id="sign-up-btn">
              Sign up
            </button>
              </Link>
           
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

