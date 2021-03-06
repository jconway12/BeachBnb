import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import {createListing} from "../../actions/listing_actions";

class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.listing, dropDown: false};
        this.photoFile = null;
        this.update = this.update.bind(this);
        this.submit = this.submit.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.renderDropDown = this.renderDropDown.bind(this);
        this.increaseGuest = this.increaseGuest.bind(this);
        this.decreaseGuest = this.decreaseGuest.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
    }

    handleFiles(e) {
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    update(type) {
        return e => {
            this.setState({[type]: e.target.value});
        }
    }

    submit(e) {
        e.preventDefault();
        delete this.state.dropDown
        const formData = new FormData();
        formData.append('listing[owner_id]', this.state.owner_id);
        formData.append('listing[title]', this.state.title);
        formData.append('listing[photos]', this.state.photoFile);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[lat]', this.state.lat);
        formData.append('listing[lng]', this.state.lng);
        formData.append('listing[city]', this.state.city);
        formData.append('listing[num_beds]', this.state.num_beds);
        formData.append('listing[rate]', this.state.rate);

        this.props.action(formData).then(() => this.props.closeModal());
    }

    dropDown() {
        if (this.state.dropDown) {
            this.setState({ dropDown: false });
        } else {
            this.setState({ dropDown: true });
        }
    }

    increaseGuest(e) {
        e.stopPropagation();
        this.setState({ num_beds: this.state.num_beds + 1, dropDown: true });
    }

    decreaseGuest(e) {
        e.stopPropagation();
        if (this.state.num_beds > 0) {
            this.setState({ num_beds: this.state.num_beds - 1, dropDown: true });
        }
    }

    renderDropDown() {
        if (this.state.dropDown) {
            return (
                <div id="guest-dropdown3">
                    <div id="label3">Beds</div>
                    <div id="less3" onClick={this.decreaseGuest}><img src={window.minusURL} /></div>
                    <div id="num-guests3">{this.state.num_beds}</div>
                    <div id="more3" onClick={this.increaseGuest}><img src={window.plusURL} /></div>
                </div>
            )
        }
    }

    render() {
        return (
        <div className="listing-form">
        <form onSubmit={this.submit}>
            <div onClick={this.props.closeModal} id="listing-x">X</div>
            <label>
                Title
                <br />
                <input type="text" value={this.state.title} onChange={this.update('title')}/>
            </label>

            <label>
                Description
                <br />
                <input type="text" value={this.state.description} onChange={this.update('description')} />
            </label>

            <label>
                City
                <br />
                <input type="text" value={this.state.city} onChange={this.update('city')} />
            </label>

            <label>
                Beds
                 <br />
                <input type="text" placeholder="Beds" value={this.state.num_beds} onClick={this.dropDown} onChange={this.update('num_beds')} />
            </label>
            <div id="dropdown-holder3">{this.renderDropDown()}</div>

           <label>
            Nightly Rate per Guest
                <br />
            <input type="text" value={this.state.rate} onChange={this.update('rate')} />
           </label>


            <label>
                Latitude
                <br/>
                <input type="text" value={this.state.lat} onChange={this.update('lat')} />
            </label>

            <label>
                Longitude
                <br />
                <input type="text" value={this.state.lng} onChange={this.update('lng')} />
            </label>

            <label>
              Photos
                <br />
            <input type="file" onChange={this.handleFiles}/>
           </label>

            <label className='button'>
             <input type="submit" value='Create Listing' onClick={this.submit}/>
            </label>
        </form>
        </div >
        )
    }
}

const msp = state => {
    const currUserId = state.session.id;
    const listing = { owner_id: currUserId, title: "", description: "", rate: 0, num_beds: 1, city: "", lat: null, lng: null };
    return {
        listing
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        action: listing => dispatch(createListing(listing))
    }
}

export default connect(msp, mdp)(ListingForm);