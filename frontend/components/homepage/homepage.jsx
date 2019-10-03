import React from 'react';

class HomepageComponent extends React.Component {
    render() {
        return (
            <div id='welcome-form'>
                <p>Book unique places to stay and things to do.</p>
                <form onSubmit={this.submit}>
                    <label>
                        WHERE
                    <br />
                        <input type="text" placeholder="Anywhere"/>
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

                    <label>
                        GUESTS
                    <br />
                        <select defaultValue="1 guest">
                            <option value="1 guest">1 guest</option>
                            <option value="2 guests">2 guests</option>
                            <option value="3 guests">3 guests</option>
                            <option value="4 guests">4 guests</option>
                            <option value="5 guests">5 guests</option>
                            <option value="6 guests">6 guests</option>
                            <option value="7 guests">7 guests</option>
                            <option value="8 guests">8 guests</option>
                            <option value="9 guests">9 guests</option>
                            <option value="10 guests">10 guests</option>
                            <option value="11 guests">10+ guests</option>
                        </select>
                    </label>

                    <label className='button'>
                        <input type='submit' value="Search"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default HomepageComponent;
