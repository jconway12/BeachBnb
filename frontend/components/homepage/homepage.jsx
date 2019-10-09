import React from 'react';
// import DatePicker from './calendar';
import {withRouter} from 'react-router-dom';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


class HomepageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: "", min_beds: 1, max_beds: 5, max_price: 200, min_price: 10, dropDown: false, start_date: null, end_date: null, focused1: false, focused2: false };
        this.renderDropDown = this.renderDropDown.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.increaseGuest = this.increaseGuest.bind(this);
        this.decreaseGuest = this.decreaseGuest.bind(this);
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }


    update(filter) {
        return e => {
            this.setState({ [filter]: e.target.value });
        }
    }

    submit(e) {
        e.preventDefault();
        if(this.state.city === "") {
            this.props.history.push("/listings");
        } else {
            // debugger
            delete this.state.dropDown;
            this.props.history.push(`/search/${{}}/${this.state.city}/${this.state.min_price}/${this.state.max_price}/${this.state.min_beds}/${this.state.max_beds}/${this.state.start_date}/${this.state.end_date}`);
        }
    }

    renderDropDown() {
        // debugger
        if(this.state.dropDown) {
            return (
                <div id="guest-dropdown">
                    <div id="label">Guests</div>
                    <div id="less" onClick={this.decreaseGuest}>-</div>
                    <div id="num-guests">{this.state.min_beds}</div>
                    <div id="more" onClick={this.increaseGuest}>+</div>
                </div>
            )
        }
    }

    dropDown() {
        // debugger
        if(this.state.dropDown) {
            this.setState({dropDown: false});
        } else {
            this.setState({dropDown: true});
        }
    }

    increaseGuest(e) {
        e.stopPropagation();
        this.setState({ min_beds: this.state.min_beds + 1, dropDown: true });
    }

    decreaseGuest(e) {
        e.stopPropagation();
        if (this.state.min_beds > 0) {
         this.setState({ min_beds: this.state.min_beds - 1, dropDown: true });
        }
    }

    handleFocus(field) {
        // debugger
        return ({ focused }) => {
            // debugger
            this.setState({ [field]: focused })
        }
    }

    render() {
        // debugger
        return (
            <div id='welcome-form'>
                <p>Book unique places to stay and things to do.</p>
                <form onSubmit={this.submit}>
                    <label>
                        WHERE
                    <br />
                        <input type="text" placeholder="Anywhere" value={this.state.city} onChange={this.update('city')}/>
                    </label>

                    <div id="date-select">
                        <label id="check-in">
                            CHECK IN
                            <br/>
                           <SingleDatePicker
                                date={this.state.start_date} // momentPropTypes.momentObj or null
                                onDateChange={start_date => this.setState({ start_date })} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused2: focused })} // PropTypes.func.isRequired
                                id="1" // PropTypes.string.isRequired,
                                small={true}
                                numberOfMonths={1}
                            />
                        </label>
                        <label id="check-out">
                            CHECK OUT
                            <br />
                            <SingleDatePicker
                                date={this.state.end_date} // momentPropTypes.momentObj or null
                                onDateChange={end_date => this.setState({ end_date })} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused1: focused })} // PropTypes.func.isRequired
                                id="2" // PropTypes.string.isRequired,
                                small={true}
                                numberOfMonths={1}
                            />
                        </label>
                    </div>
                
                    <label>
                        GUESTS
                    <br />
                        <input type="text" placeholder="Guests" value={this.state.min_beds} onClick={this.dropDown} onChange={this.update('min_beds')}/>
                    </label>
                    <div id="dropdown-holder">{this.renderDropDown()}</div>

                    <label className='button'>
                        <input type='submit' value="Search" onClick={this.submit}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default withRouter(HomepageComponent);
