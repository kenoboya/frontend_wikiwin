import React, { useState, useEffect } from 'react';
import signUpStyles from '../css/sign-up.module.css';
import { submitRegistration } from '../api/routes/registration';
import { useNavigate } from 'react-router-dom';

const getCountriesAndCities = () => {
  return {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    Ukraine: ['Kyiv', 'Vinnitsa', 'Lyiv'],
  };
};

function Registration() {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countriesAndCities, setCountriesAndCities] = useState({});
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const data = getCountriesAndCities();
    setCountriesAndCities(data);
  }, []);

  const handleDateChange = (e) => setBirthDate(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity(''); // Reset city when country changes
  };
  const handleCityChange = (e) => setCity(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const cities = country ? countriesAndCities[country] : [];

  const validateForm = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (password !== confirmPassword)
      errors.confirmPassword = 'Passwords do not match';
    if (!birthDate) errors.birthDate = 'Birth date is required';
    if (!gender) errors.gender = 'Gender is required';
    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        UserSignUp: {
          username,
          email,
          password,
        },
        Person: {
          first_name: firstName,
          last_name: lastName,
          birth_date: birthDate,
          gender,
          country: country || null, // Set to null if empty
          city: city || null, // Set to null if empty
          image: image || null, // Set to null if empty
        },
      };

      try {
        await submitRegistration(data);
        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Form submission failed');
      }
    }
    navigate('/');
  };

  return (
    <div className={signUpStyles.formContainer}>
      <div className={signUpStyles.form}>
        <h1>Sign-Up</h1>
        <form onSubmit={handleSubmit}>
          <label className={signUpStyles.labelText} htmlFor="username">
            Username
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {formErrors.username && (
            <div className={signUpStyles.error}>{formErrors.username}</div>
          )}

          <label className={signUpStyles.labelText} htmlFor="email">
            Email
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {formErrors.email && (
            <div className={signUpStyles.error}>{formErrors.email}</div>
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

          <label className={signUpStyles.labelText} htmlFor="confirm-password">
            Confirm password
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm entered password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {formErrors.confirmPassword && (
            <div className={signUpStyles.error}>
              {formErrors.confirmPassword}
            </div>
          )}

          <label className={signUpStyles.labelText} htmlFor="first-name">
            First name
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter first name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          {formErrors.firstName && (
            <div className={signUpStyles.error}>{formErrors.firstName}</div>
          )}

          <label className={signUpStyles.labelText} htmlFor="last-name">
            Last name
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter last name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          {formErrors.lastName && (
            <div className={signUpStyles.error}>{formErrors.lastName}</div>
          )}

          <label className={signUpStyles.labelText} htmlFor="birth-date">
            Birth date
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="date"
            id="birth-date"
            name="birth-date"
            value={birthDate}
            onChange={handleDateChange}
            required
          />
          {formErrors.birthDate && (
            <div className={signUpStyles.error}>{formErrors.birthDate}</div>
          )}

          <div className={signUpStyles.genderField}>
            <label className={signUpStyles.labelText}>Gender</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === 'Other'}
                onChange={handleGenderChange}
              />
              Other
            </label>
          </div>
          {formErrors.gender && (
            <div className={signUpStyles.error}>{formErrors.gender}</div>
          )}

          <div className={signUpStyles.countryField}>
            <label className={signUpStyles.labelText} htmlFor="country">
              Country
            </label>
            <select
              className={signUpStyles.inputField}
              id="country"
              name="country"
              value={country}
              onChange={handleCountryChange}
            >
              <option value="">Select country</option>
              {Object.keys(countriesAndCities).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {country && (
            <div className={signUpStyles.cityField}>
              <label className={signUpStyles.labelText} htmlFor="city">
                City
              </label>
              <select
                className={signUpStyles.inputField}
                id="city"
                name="city"
                value={city}
                onChange={handleCityChange}
              >
                <option value="">Select city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}

          <label className={signUpStyles.labelText} htmlFor="image">
            Image URL
          </label>
          <input
            className={`${signUpStyles.inputField} ${signUpStyles.signUpInputField}`}
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            value={image}
            onChange={handleImageChange}
          />
          <button
            className={signUpStyles.submitButton}
            type="submit"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
