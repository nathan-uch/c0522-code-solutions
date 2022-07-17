import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isValid: false
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    if (this.state.password.length < 7) {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  getErrorMessage() {
    if (this.state.password === '') {
      return 'A password is required.';
    } else if (this.state.password.length < 8) {
      return 'Password must be at least 8 characters.';
    } else {
      return '';
    }
  }

  render() {
    const error = this.getErrorMessage();
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' value={this.state.password} onChange={this.handlePasswordChange} />
        <i className={`fa-solid fa-lg ${this.state.isValid ? 'fa-check' : 'fa-xmark'}`} />
        <p className='invalid-display'>{error}</p>
      </form>
    );
  }
}

export default ValidatedInput;
