import React from "react";
import {connect} from 'react-redux';
import {createRes, removeResErrors} from '../../actions/reservation_actions';
import {withRouter} from 'react-router-dom';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
// import moment from 'react-moment';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.reservation, focused1: false, focused2: false};
    this.state.dropDown = false;
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.dropDown = this.dropDown.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.increaseGuest = this.increaseGuest.bind(this);
    this.decreaseGuest = this.decreaseGuest.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.removeResErrors();
  }

  renderErrors() {
    if(this.props.errors.length != 0) {
      return <h6 id="res-errors">Dates unavailable</h6>
    }
  }

  update(type) {
    return e => {
      this.setState({[type]: e.target.value});
    }
  }

  submit(e) {
    e.preventDefault();
    delete this.state.dropDown;
    delete this.state.focused1;
    delete this.state.focused2;
    this.props.action(this.state).then(() => this.props.history.push("/trips")); //maybe go to reservation show?
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
    // debugger
    // // const tempStartDate = moment(this.state.start_date).format('DD-MM-YYYY');
    // const tempStartDate = moment(this.state.start_date);
    // const tempEndDate = moment(this.state.end_date);
        // const momentString = momentObj.format('YYYY-MM-DD'); // 2016-07-15

    const startDateString = this.state.start_date;
    const dateObj1 = new Date(startDateString);
    const momentObj1 = moment(dateObj1);
    
    const endDateString = this.state.end_date;
    const dateObj2 = new Date(endDateString);
    const momentObj2 = moment(dateObj2);
    // debugger
    return (
    <form onSubmit={this.submit}>
      <div className="date-range">
      <label>
        Start Date
        <br/>
        {/* <input type="date" value={this.state.start_date} onChange={this.update('start_date')}/> */}
          <SingleDatePicker
            date={this.state.start_date} // momentPropTypes.momentObj or null
            onDateChange={start_date => this.setState({ start_date })} // PropTypes.func.isRequired
            focused={this.state.focused1} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused1: focused })} // PropTypes.func.isRequired
            id="3" // PropTypes.string.isRequired,
            small={true}
            numberOfMonths={1}
          />
      </label>

      <label>
        End Date
        <br/>
        {/* <input type="date" value={this.state.end_date} onChange={this.update('end_date')} /> */}
          <SingleDatePicker
            date={this.state.end_date} // momentPropTypes.momentObj or null
            onDateChange={end_date => this.setState({ end_date })} // PropTypes.func.isRequired
            focused={this.state.focused2} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused2: focused })} // PropTypes.func.isRequired
            id="4" // PropTypes.string.isRequired,
            small={true}
            numberOfMonths={1}
          />
        <br />
      </label>
      </div>


      <label >
          Guests
        <br />
        <input className="input-type" type="text" placeholder="Guests" value={this.state.num_guests} onClick={this.dropDown} onChange={this.update('num_guests')}/>
      </label>
      <div id="dropdown-holder2">{this.renderDropDown()}</div>

      {this.renderErrors()}

        <input className="button" type="submit" value={this.props.formType} onClick={this.submit}/>
    </form>
    )
  }
}

const msp = (state, ownProps) => {
  // debugger
  const listing_id = ownProps.listingId;
  const currUserId = state.session.id;
  const reservation = {listing_id: listing_id, owner_id: currUserId, start_date: null, end_date: null, num_guests: 1};
  const errors = state.errors.resErrors;
  return {reservation, formType: 'Create Reservation', errors};
}

const mdp = dispatch => {
  return {
    action: reservation => dispatch(createRes(reservation)),
    removeResErrors: () => dispatch(removeResErrors())
  };
}

export default withRouter(connect(msp, mdp)(ReservationForm));