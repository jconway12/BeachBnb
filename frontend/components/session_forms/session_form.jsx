import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderEmailError = this.renderEmailError.bind(this);
    this.renderPasswordError = this.renderPasswordError.bind(this);
    this.renderFnameError = this.renderFnameError.bind(this);
    this.renderLnameError = this.renderLnameError.bind(this);
  }
  
  componentDidMount() {
    this.props.resetErrors();
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  submit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal);
  }

  demoLogin() {
    this.props.action(this.props.demoUser).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul className='errors'>
      {this.props.errors.map((error, idx) => {
       return <li key={idx}>{error}</li>
      })}
      </ul>
    )
  }

  renderEmailError() {
    if (this.props.errors.includes("Email can't be blank") || this.props.errors.includes("Email is invalid")) {
      return <p class="session-error">Email is invalid</p>;
    }
  }

  renderPasswordError() {
    if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
      return <p class="session-error">Password is required</p>;
    }
  }

  renderLnameError() {
    if (this.props.errors.includes("Last name can't be blank")) {
      return <p class="session-error">Last name is required</p>;
    }
  }

  renderFnameError() {
    if (this.props.errors.includes("First name can't be blank")) {
      return <p class="session-error">First name is required</p>;
    }
  }

  render() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div id='signup-form'>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <form onSubmit={this.submit}>
            <label>
              <br/>
              <input type="text" value={this.state.first_name} placeholder="First name" onChange={this.update('first_name')}/>
              {this.renderFnameError()}
            </label>

            <label>
             <br />
              <input type="text" value={this.state.last_name} placeholder="Last name" onChange={this.update('last_name')} />
              {this.renderLnameError()}
            </label>

            <label>
              <br />
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
              {this.renderEmailError()}
            </label>

            <label>
               <br />
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
              {this.renderPasswordError()}
            </label>

            <label className='button'>
              <input type='submit' value="Sign Up" onClick={this.submit}/>
            </label>
          </form>
          {/* {this.renderSessionErrors()} */}
          <p>Already have a Wherebnb account? <input type='submit' value="Log In" onClick={() => this.props.openModal('login')} /></p>
        </div>
      )
    } else {
      return (
        <div id='login-form'>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <form onSubmit={this.submit}>
            <label>
            <br />
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
            </label>

            <label>
            <br />
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
            </label>

            <label className='button'>
            <input type='submit' value="Log In" onClick={this.submit}/>
            </label>
          </form>
          {this.renderErrors()}
          <p>Don't have an account? <input type='submit' value="Sign Up" onClick={() => this.props.openModal('signup')} /> 
          or <input type='submit' value="Demo Login" onClick={this.demoLogin} /></p>
        </div>
      )
    }
  }
}

export default SessionForm;