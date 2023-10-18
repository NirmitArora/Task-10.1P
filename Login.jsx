import { Link, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { UseUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { Login } = UseUserAuth();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await Login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Invalid Username or Password");
    }
  }
    return (
      <div className="box">
        <Link to='/login/signup'>
        <Button className="btnn">Sign Up</Button>
        </Link> 
        {error && <Alert variant="danger">{error}</Alert>}
        <h4>Your Email</h4>
        <input type="text" name="email" id="myemail" onChange={(e) => setEmail(e.target.value)}/>

        <h4>Your Password</h4>
        <input type="text" name="pass" id="mypass" onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <br />
        <br />
        <Button primary onClick={handleClick}>Login</Button>
      </div>
    );
  };
