import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
  const [addProfile, { error, data }] = useMutation(LOGIN_PROFILE);

  // update state based on form input changes

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
    const profile = {
        username: username,
        password: password,
    };
    console.log(profile)

    const { data } = await addProfile({
        variables: { username, password },
    });

      Auth.login(data.login.token);

    } catch (e) {
      console.error(e);
    }
  };

return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Log in</h4>
          <div className="card-body">
            {data ? (
              <p>
                You are now logged in{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;




