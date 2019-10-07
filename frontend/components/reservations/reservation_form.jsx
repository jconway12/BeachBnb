import React from "react";
import {connect} from 'react-redux';
import {createRes} from '../../actions/reservation_actions';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reservation;
    this.state.dropDown = false;
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.dropDown = this.dropDown.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.increaseGuest = this.increaseGuest.bind(this);
    this.decreaseGuest = this.decreaseGuest.bind(this);
  }

  update(type) {
    return e => {
      this.setState({[type]: e.target.value});
    }
  }

  submit(e) {
    e.preventDefault();
    delete this.state.dropDown;
    this.props.action(this.state).then(() => this.props.history.push("/profile"));
  }

  dropDown() {
    if (this.state.dropDown) {
     this.setState({dropDown: false});
    } else {
      this.setState({ dropDown: true });
    }
  }

  increaseGuest(e) {
    e.stopPropagation();
    this.setState({ num_guests: this.state.num_guests + 1, dropDown: true});
  }

  decreaseGuest(e) {
    e.stopPropagation();
    if (this.state.num_guests > 0) {
      this.setState({ num_guests: this.state.num_guests - 1, dropDown: true});
    }
  }

  renderDropDown() {
    if (this.state.dropDown) {
      return (
        <div id="guest-dropdown2">
          <div id="label2">Guests</div>
          <div id="less2" onClick={this.decreaseGuest}>-</div>
          <div id="num-guests2">{this.state.num_guests}</div>
          <div id="more2" onClick={this.increaseGuest}>+</div>
        </div>
      )
    }
  }

  render() {
    return (
    <form>
      <label>
        Start Date
        <br/>
        <input type="date" value={this.state.start_date} onChange={this.update('start_date')}/>
      </label>

      <label>
        End Date
        <input type="date" value={this.state.end_date} onChange={this.update('end_date')} />
        <br />
      </label>

      <label>
        Guests
        <br />
        <input type="text" placeholder="Guests" value={this.state.num_guests} onClick={this.dropDown} onChange={this.update('num_guests')}/>
      </label>
      <div id="dropdown-holder2">{this.renderDropDown()}</div>

      <input className="button" type="submit" value={this.props.formType}/>
    </form>
    )
  }
}

const msp = (state, ownProps) => {
  const listing_id = ownProps.listingId;
  const currUserId = state.session.id;
  const reservation = {listing_id: listing_id, owner_id: currUserId, start_date: Date.today, end_date: Date.today, num_guests: 1};
  return {reservation, formType: 'Create Reservation'};
}

const mdp = dispatch => {
  return {
    action: reservation => dispatch(createRes(reservation))
  };
}

export default connect(msp, mdp)(ReservationForm);