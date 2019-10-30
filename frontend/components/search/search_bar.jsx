import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import SearchAutocomplete from './search_autocomplete';
//text input for city
//button for beds w/ min and max on dropdown 
//button for bed w/ min max on dropdown

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bounds: {}, min_beds: 1, max_beds: 5, max_price: 200, min_price: 10, city: "", start_date: null, end_date: null, auto: false};
        this.state.PriceDropDown = false;
        this.state.BedDropDown = false;
        this.update = this.update.bind(this);
        this.submit = this.submit.bind(this);
        this.BedDropDown = this.BedDropDown.bind(this);
        this.PriceDropDown = this.PriceDropDown.bind(this);
        this.renderBedDropDown = this.renderBedDropDown.bind(this);
        this.renderPriceDropDown = this.renderPriceDropDown.bind(this);
        this.increaseField = this.increaseField.bind(this);
        this.decreaseField = this.decreaseField.bind(this);
        this.renderAuto = this.renderAuto.bind(this);
        this.focus = this.focus.bind(this);
    }

    focus() {
        // debugger
        this.setState({auto: true});
    }
 
    renderAuto(val) {
        // debugger
        if (this.state.auto && this.state.city != "") {
            return <SearchAutocomplete value={val}/>;
        }
    }

    update(filter) {
        return e => {
            this.setState({[filter]: e.target.value});
            //if filter is city => want to update autocomplete component state
            if (filter === "city") {
                this.setState({auto: true})
            }
        }
    }

    submit(e) {
        e.preventDefault();
        delete this.state.PriceDropDown;
        delete this.state.BedDropDown;
        delete this.state.auto;
        const city = document.getElementById("search-bar-input").value === "" ? "null" : document.getElementById("search-bar-input").value;
        this.props.history.push(`/search/${this.state.bounds}/${city}/${this.state.min_price}/${this.state.max_price}/${this.state.min_beds}/${this.state.max_beds}/${this.state.start_date}/${this.state.end_date}`)
    }

    PriceDropDown() {
        if (this.state.PriceDropDown) {
            this.setState({ PriceDropDown: false });
        } else {
            this.setState({ PriceDropDown: true });
        }
    }

    BedDropDown() {
        if (this.state.BedDropDown) {
            this.setState({ BedDropDown: false });
        } else {
            this.setState({ BedDropDown: true });
        }
    }

    increaseField(field, dropDown) {
        return e => {
             e.stopPropagation();
            this.setState({ [field]: this.state[field] + 1, [dropDown]: true });
        }
    }

    decreaseField(field, dropDown) {
        return e => {
            e.stopPropagation();
            if (this.state[field] > 0) {
             this.setState({ [field]: this.state[field] - 1, [dropDown]: true });
            }
        }
    }

    renderPriceDropDown() {
        if (this.state.PriceDropDown) {
            return (
                <div id="price-dropdown">
                    <div id="min-price">
                        <div className="label">Minimum Price</div>
                        <div className="less" onClick={this.decreaseField("min_price", 'PriceDropDown')}><img src={window.minusURL} /></div>
                        <div className="count">{this.state.min_price}</div>
                        <div className="more" onClick={this.increaseField("min_price", 'PriceDropDown')}><img src={window.plusURL} /></div>
                    </div>
                    <div id="why"> 
                        <div className="label">Maximum Price</div>
                        <div className="less" onClick={this.decreaseField("max_price", 'PriceDropDown')}><img src={window.minusURL} /></div>
                        <div className="count">{this.state.max_price}</div>
                        <div className="more" onClick={this.increaseField("max_price", 'PriceDropDown')}><img src={window.plusURL} /></div>
                    </div>
                </div>
            )
        }
    }

    renderBedDropDown() {
        if (this.state.BedDropDown) {
            return (
                <div id="bed-dropdown">
                    <div id="min-bed">
                        <div className="label">Minimum Beds</div>
                        <div className="less" onClick={this.decreaseField("min_beds", 'BedDropDown')}><img src={window.minusURL} /></div>
                        <div className="min">{this.state.min_beds}</div>
                        <div className="more" onClick={this.increaseField("min_beds", 'BedDropDown')}><img src={window.plusURL} /></div>
                    </div>
                    <div id="max-bed">
                        <div className="label">Maximum Beds</div>
                        <div className="less" onClick={this.decreaseField("max_beds", 'BedDropDown')}><img src={window.minusURL} /></div>
                        <div className="count">{this.state.max_beds}</div>
                        <div className="more" onClick={this.increaseField("max_beds", 'BedDropDown')}><img src={window.plusURL} /></div>
                    </div>
                </div>
            )
        }
    }

    render() {
        let city = this.state.city;
        if (document.getElementById("search-bar-input") && document.getElementById("search-bar-input").value != "") {
            city = document.getElementById("search-bar-input").value;
        }

        return (
        <div id="search-bar">
            <form onSubmit={this.submit}>
                    <input type="text" id="search-bar-input" value={city} placeholder="'Try 'Montevideo'" onChange={this.update('city')} onClick={this.focus} />
                    {this.renderAuto(this.state.city)}
                <div className="filters">
                <div className="filter-button" onClick={this.PriceDropDown}>Price</div>
                <div id="price-dropdown-holder">{this.renderPriceDropDown()}</div>

                <div className="filter-button" onClick={this.BedDropDown}>Beds</div>
                <div id="beds-dropdown-holder">{this.renderBedDropDown()}</div>

                {/* <input className="filter-button" type="date" onChange={this.update("start_date")}/>
                <input className="filter-button" type="date" onChange={this.update("end_date")}/> */}

                </div>

                {/* <input type="submit" value="search" onClick={this.submit}/> */}
            </form>
        </div>
        )
    }
}

const msp = state => {
    return {};
}

const mdp = dispatch => {
    return {};
}

export default withRouter(connect(msp, mdp)(SearchBar));