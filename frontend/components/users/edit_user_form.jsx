import React from 'react';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/user_actions';
import {closeModal} from '../../actions/modal_actions';

class EditUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.submit = this.submit.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
    }   

    submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[photo]', this.state.photoFile);
        formData.append('user[first_name]', this.state.first_name);
        formData.append('user[last_name]', this.state.last_name);
        formData.append('user[email]', this.state.email);

        this.props.updateUser(formData, this.state.id).then(this.props.closeModal);
    }

    handleFiles(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    render() {
        const user = this.props.user || {};
        return (
            <div className='edit-user-form'>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <form onSubmit={this.submit}>
                    <label>
                        Choose Photo
                        <br />
                        <input type="file" onChange={this.handleFiles} />
                    </label>
                    <input className='button' type="submit" value="Upload Photo" onClick={this.submit}/>
                </form>
            </div>
            
        )
    }
}

const msp = state => {
    const userId = state.session.id;
    const user = state.entities.users[userId];
    return { userId, user }
}

const mdp = dispatch => {
    return {
        updateUser: (formData, id) => dispatch(updateUser(formData, id)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(EditUserForm);