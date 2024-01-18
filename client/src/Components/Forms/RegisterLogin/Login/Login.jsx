import React, { useState } from 'react';
import CssLogin from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Email 
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      formIsValid = false;
    }

    // Password 
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    







        
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={CssLogin.container}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={!errors.email ? '' : errors.email}
              value={!errors.email ? formData.email : ''}
              onChange={handleChange}
              className={`${errors.email ? CssLogin.error : ''}`}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={!errors.password ? '' : errors.password}
              value={!errors.password ? formData.password : ''}
              onChange={handleChange}
              className={`${errors.password ? CssLogin.error : ''}`}
            />
          </div>
        </div>
        <br />
        <div className={CssLogin.center}>
          <button type="submit" className={CssLogin.submitButton}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
