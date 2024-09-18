import React, { useState } from 'react';
import signUpStyles from '../css/sign-up.module.css';
import { useNavigate } from 'react-router-dom';
import { submitLogin } from '../api/routes/authentication';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    const errors = {};
    if (!login) errors.login = 'Login is required';
    if (!password) errors.password = 'Password is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        login,
        password,
      };
      console.log('Data to submit:', data);
      try {
        await submitLogin(data);
        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Form submission failed:', error);
      }
    }
    navigate('/');
  };

  return (
    <div className={signUpStyles.formContainer}>
      <div className={signUpStyles.form}>
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <label className={signUpStyles.labelText} htmlFor="login">
            Login
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="text"
            id="login"
            name="login"
            placeholder="username or email"
            value={login}
            onChange={handleLoginChange}
            required
          />
          {formErrors.login && (
            <div className={signUpStyles.error}>{formErrors.login}</div>
          )}
          <label className={signUpStyles.labelText} htmlFor="password">
            Password
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {formErrors.password && (
            <div className={signUpStyles.error}>{formErrors.password}</div>
          )}
          <button className={signUpStyles.submitButton} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
