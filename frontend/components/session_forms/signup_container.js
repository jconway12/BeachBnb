import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = state => {
  const errors = state.errors.sessionErrors;
  const user = { first_name: "", last_name: "", email: "", password: "" };
  const formType = 'Sign Up';
  return { user, formType, errors };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};
 
export default connect(
  msp,
  mdp
)(SessionForm);