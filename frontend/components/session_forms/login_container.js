import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const msp = state => {
  const user = { email: "Email", password: "Password" };
  const formType = 'Log In';
  return { user, formType };
}

const mdp = dispatch => {
  return {
    action: user => dispatch(login(user))
  }
}

export default connect(msp, mdp)(SessionForm);