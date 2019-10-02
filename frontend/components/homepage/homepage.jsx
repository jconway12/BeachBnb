import React from 'react';

class HomepageComponent extends React.Component {
    render() {
        return (
            <div id='welcome-form'>
                <p>Book a place to stay</p>
                <form onSubmit={this.submit}>
                    <label>
                        Where:
                    <br />
                        <input type="text" />
                    </label>

                    <label>
                        Check In:
                    <br />
                        <input type="text" />
                    </label>

                    <label>
                        Check Out:
                    <br />
                        <input type="text" />
                    </label>

                    <label>
                        Guests:
                    <br />
                        <input type="text"/>
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
