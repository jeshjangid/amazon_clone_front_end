import React, { useState } from 'react'
import RegisterView from './RegisterView'

function RegisterContainer(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
        setName(value);
        }else if(name === 'email') {
            setEmail(value)
        }else if(name === 'password') {
            setPassword(value)
        }else if(name === 'password2') {
            setPassword2(value)
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            password2,
          };
          console.log(user);
    }

  return (
    <div>
        <RegisterView
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         {...props}
        />
    </div>
  )
}

export default RegisterContainer