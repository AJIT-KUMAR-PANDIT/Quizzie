import React, { useState } from 'react';
import CssLogin from './Login.module.css';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Url } from '../../../../utils/URL/Url';

const Login = () => {
  const baseUrl = Url();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(`${baseUrl}/login`, formData);
        console.log(response.data);
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token);

        
            window.location.href = '/dashboard';
        


      } catch (error) {
        console.error(error.response.data);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
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
      {loading ? <Loader /> : null}
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
      <ToastContainer />
    </>
  );
};

export default Login;
