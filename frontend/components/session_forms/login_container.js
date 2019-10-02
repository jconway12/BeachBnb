import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = state => {
  //ADD ERRORS
  const user = { email: "", password: "" };
  const formType = 'Log In';
  return { user, formType };
}

const mdp = dispatch => {
  return {
    action: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(msp, mdp)(SessionForm);