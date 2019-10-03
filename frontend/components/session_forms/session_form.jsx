import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  render() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div id='signup-form'>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <form onSubmit={this.submit}>
            <label>
              <br/>
              <input type="text" value={this.state.first_name} placeholder="First name" onChange={this.update('first_name')}/>
            </label>

            <label>
             <br />
              <input type="text" value={this.state.last_name} placeholder="Last name" onChange={this.update('last_name')} />
            </label>

            <label>
              <br />
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
            </label>

            <label>
               <br />
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
            </label>

            <label className='button'>
              <input type='submit' value="Sign Up" onClick={this.submit}/>
            </label>
          </form>
          {this.renderErrors()}
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
          <p>Don't have an account? <input type='submit' value="Sign Up" onClick={() => this.props.openModal('signup')} /></p>
          <p>or <input type='submit' value="Demo Login" onClick={this.demoLogin} /></p>
        </div>
      )
    }
  }
}

export default SessionForm;