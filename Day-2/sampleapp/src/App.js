import './asserts/css/style1.css';
import Nav from './components/Nav.js';

function App() {
  return (
    <div>
      <Nav /> 
      <div className="c1">
        <form className="container">
          <h1>SIGN-UP</h1>
          <input type="text" placeholder="Enter Your Name" id="uname" className="style-input" />
          <input type="password" placeholder="Create password" id="pass" className="style-input" />
          <input type="text" placeholder="Confirm password" id="confirmpass" className="style-input" />
          <input type="date" placeholder="Enter Your DOB" className="style-input" />
          <input type="number" placeholder="Phone Number" className="style-input" />
          <input type="email" placeholder="Enter Your email" className="style-input" />
          <input type="number" placeholder="Enter Your Mobile Number" className="style-input" />
          <input type="submit" value="Sign Up!" className="style-btn" />
        </form>
      </div>
    </div>
  );
}

export default App;
