import React from 'react';
import {withRouter} from 'react-router-dom';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user
        this.state.hometown = this.state.hometown || "";
        this.state.bio = this.state.bio || "";
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
        this.close = this.close.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const form = document.getElementById('prof-form');
        form.style.height = "0px";
        this.props.updateUser(this.state);
    }

    close() {
        const form = document.getElementById('prof-form');
        form.style.height = "0px";
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
                    <br/>
                    <textarea id="" cols="30" rows="10" value={this.state.bio} onChange={this.update('bio')}/>
                </label>
                <label>
                    Location
                    <br />
                    <input type="text" value={this.state.hometown} onChange={this.update('hometown')}/>
                </label>
                <div className='options'>
                <input id='save' type="submit" value='Save' onClick={this.submit}/>
                <div id='cancel' onClick={this.close}>cancel</div>
                </div>
            </form>
        )
    }
}

export default withRouter(ProfileForm);