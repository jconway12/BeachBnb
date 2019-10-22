import React from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user
        this.state.hometown = this.state.hometown || "";
        this.state.bio = this.state.bio || "";
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
    }

    submit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
    }

    update(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        return (
            <form>
                <label>
                    About 
                    <textarea id="" cols="30" rows="10" value={this.state.bio} onChange={this.update('bio')}/>
                </label>
                <label>
                    Location
                    <input type="text" value={this.state.hometown} onChange={this.update('hometown')}/>
                </label>
                <input type="submit" value='Update Profile'/>
            </form>
        )
    }
}

export default ProfileForm;