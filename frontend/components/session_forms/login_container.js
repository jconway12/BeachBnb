import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = state => {
  const errors = state.errors.sessionErrors;
  const user = { email: "", password: "" };
  const formType = 'Log In';
  return { user, formType, errors };
}

const mdp = dispatch => {
  return {
    action: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(msp, mdp)(SessionForm);