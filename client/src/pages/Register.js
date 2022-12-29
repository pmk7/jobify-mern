import React, { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

const initialState = {
  userName: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, displayAlert, clearAlert, registerUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { userName, email, password, isMember } = values;
    if (!email || !password || (!isMember && !userName)) {
      displayAlert();
      return;
    }
    const currentUser = { userName, email, password };
    if (isMember) {
      console.log('already member');
    } else {
      registerUser(currentUser);
    }
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.userName}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type='text'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type='text'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
