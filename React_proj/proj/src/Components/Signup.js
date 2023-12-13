const Signup = () => {
  return (
    <div className="container-custom sign-up-mode">
      <div className="forms-container-custom">
        <div className="signin-signup-custom">
          <form className="sign-in-form-custom">
            <h2 className="title-custom">Sign Up</h2>
            <div className="input-field-custom">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field-custom">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field-custom">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn-custom" value="Sign up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
