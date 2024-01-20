import { useState } from 'react';
import CssSignup from './SignUp.module.css';
import axios from 'axios';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Name 
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

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
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      formIsValid = false;
    }

    // Confirm Password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
      formIsValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`https://quizziebackend-tei6.onrender.com/signup`, formData);
        console.log(response.data);
        
        // redirect

      } catch (error) {
        console.error(error.response.data);
      

        // error message
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
      <form onSubmit={handleSubmit}>
        <div className={CssSignup.container}>
          <div>
            <label htmlFor="name">Name&nbsp;&nbsp;&nbsp;</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={!errors.name ? formData.name : errors.name}
              value={!errors.name ? formData.name : ''}
              onChange={handleChange}
              className={`${errors.name ? CssSignup.error : ''}`}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;</label>
            <input
              type="email"
              id="emailid"
              name="email"
              placeholder={!errors.email ? formData.email : errors.email}
              value={!errors.email ? formData.email : ''}
              onChange={handleChange}
              className={`${errors.email ? CssSignup.error : ''}`}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password&nbsp;&nbsp;&nbsp;</label>
            <input
              type="password"
              id="passwordid"
              name="password"
              placeholder={!errors.password ? formData.password : errors.password}
              value={!errors.password ? formData.password : ''}
              onChange={handleChange}
              className={`${errors.password ? CssSignup.error : ''}`}
            />
          </div>
          <br />
          <div>
            <label htmlFor="confirmPassword">Confirm Password&nbsp;&nbsp;&nbsp;</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder={!errors.confirmPassword ? formData.confirmPassword : errors.confirmPassword}
              value={!errors.confirmPassword ? formData.confirmPassword : ''}
              onChange={handleChange}
              className={`${errors.confirmPassword ? CssSignup.error : ''}`}
            />
          </div>
        </div>
        <br />
        <div className={CssSignup.center}>
          <button type="submit" className={CssSignup.submitButton}>
            Sign-Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
