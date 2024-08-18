import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;







