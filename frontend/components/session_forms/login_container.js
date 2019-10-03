import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, resetErrors} from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = state => {
  const errors = state.errors.sessionErrors;
  const user = { email: "", password: "" };
  const formType = 'Log In';
  const demoUser = {email: 'demo@bnb.com', password: 'password'};
  return { user, formType, errors, demoUser };
}

const mdp = dispatch => {
  return {
    action: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
    openModal: modal => dispatch(openModal(modal))
  };
}

export default connect(msp, mdp)(SessionForm);