import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  submit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div id='signup-form'>
          <form onSubmit={this.submit}>
            <label>
              First name:
              <br/>
              <input type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
            </label>

            <label>
              Last name:
             <br />
              <input type="text" value={this.state.last_name} onChange={this.update('last_name')} />
            </label>

            <label>
              Email:
              <br />
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>

            <label>
              Password:
               <br />
              <input type="password" value={this.state.password} onChange={this.update('password')} />
            </label>

            <label className='button'>
            <input type='submit' value="Sign Up" />
            </label>
          </form>
        </div>
      )
    } else {
      return (
        <div id='login-form'>
          <form onSubmit={this.submit}>
            <label>
              Email:
            <br />
              <input type="text" value={this.state.email} onChange={this.update('first_name')}/>
            </label>

            <label>
              Password:
            <br />
              <input type="password" value={this.state.password} onChange={this.update('password')} />
            </label>

            <label className='button'>
            <input type='submit' value="Log In"/>
            </label>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;