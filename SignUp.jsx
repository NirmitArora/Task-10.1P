import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './firebase';
import { Button } from "semantic-ui-react";

function Signup() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [contact, setcontact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = contact;


  async function handleClick(event) {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createuserdocfromAuth(user, { displayName });
      console.log(user);

      navigate('/login');
    } catch (error) {
      console.log('Error in creation', error.message);
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  return (
    <div className='box1'>
      <h3 className='hea'>Create a DEV@Deakin Account</h3>
      <div className='input-container'>
        <strong className='Name'>Name* </strong>
        <input type='text' name='displayName' id='myname' onChange={handlepass} />
      </div>
      <div className='input-container'>
        <strong className='Name'>Email* </strong>
        <input type='text' name='email' id='myemail' onChange={handlepass} />
      </div>
      <div className='input-container'>
        <strong className='Name'>Password* </strong>
        <input type='password' name='password' id='mypassword' onChange={handlepass} />
      </div>
      <div className='input-container'>
        <strong className='Name'>Confirm Password* </strong>
        <input type='password' name='confirmPassword' id='myconfirmPassword' onChange={handlepass} />
      </div>
      <Button primary onClick={handleClick}>Create</Button>
    </div>
  );
}

export default Signup;
