import React, { useState } from 'react';
import LoginView from './LoginView';

const LoginContainer = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    };
    console.log(user);
  }


  return (
    <React.Fragment>
        <LoginView
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         {...email}
         {...password}
         {...props}
        />
    </React.Fragment>
  )
}

export default LoginContainer