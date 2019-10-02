import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from '../../actions/session_actions';


const msp = state => {
  const user = { first_name: "First Name", last_name: "Last Name", email: "Email", password: "Password" };
  const formType = 'Sign Up';
  return { user, formType };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(signup(user))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);