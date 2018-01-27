import React from 'react';
import PropTypes from 'prop-types';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const handler = e.target.dataset.handler === 'signup' ? this.props.handleCreate : this.props.handleLogin;

    handler(this.state)
      .then()
      .catch(console.error);
  }

  render() {
    const username =
      (
        <label htmlFor="username">
          <span>Username</span>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            required="true"
            onChange={this.handleChange}
          />
        </label>
      );

    const password =
      (
        <label htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            required="true"
            onChange={this.handleChange}
          />
        </label>
      );

    return (

      <div className="loginFormContainer">

        <form onSubmit={this.handleSubmit} data-handler="login" className="auth-form">

          <h2>Sign in</h2>

          {username}
          {password}

          <button type="submit">Login</button>

        </form>


        <form onSubmit={this.handleSubmit} data-handler="signup" className="auth-form">

          <h2>Sign up</h2>

          <label htmlFor="email">
            <span>Email Address</span>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              required="true"
              onChange={this.handleChange}
            />
          </label>

          {username}

          {password}

          <button type="submit">Create Account</button>

        </form>

      </div>

    );
  }
}

AuthForm.propTypes = {
  handleCreate: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default AuthForm;
