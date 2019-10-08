import React from 'react';
import DatePicker from './calendar';
import {withRouter} from 'react-router-dom';

class HomepageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: "", min_beds: 1, max_beds: 5, max_price: 200, min_price: 10, dropDown: false, guests: 0 };
        this.renderDropDown = this.renderDropDown.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.increaseGuest = this.increaseGuest.bind(this);
        this.decreaseGuest = this.decreaseGuest.bind(this);
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
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
            delete this.state.dropDown;
            this.props.history.push(`/search/${{}}/${this.state.city}/${this.state.min_price}/${this.state.max_price}/${this.state.min_beds}/${this.state.max_beds}`);
        }
    }

    renderDropDown() {
        // debugger
        if(this.state.dropDown) {
            return (
                <div id="guest-dropdown">
                    <div id="label">Guests</div>
                    <div id="less" onClick={this.decreaseGuest}>-</div>
                    <div id="num-guests">{this.state.guests}</div>
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
        this.setState({ guests: this.state.guests + 1, dropDown: true });
    }

    decreaseGuest(e) {
        e.stopPropagation();
        if (this.state.guests > 0) {
         this.setState({ guests: this.state.guests - 1, dropDown: true });
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
                    <br />
                        <input type="date"/>
                    </label>

                   <label id="check-in">
                        CHECK OUT
                    <br />
                        <input type="date"/>
                    </label>
                    </div>
                    
                    {/* <DatePicker /> */}


                    <label>
                        GUESTS
                    <br />
                        <input type="text" placeholder="Guests" value={this.state.guests} onClick={this.dropDown}/>
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
