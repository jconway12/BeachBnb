import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <footer id='home-footer'>
                <a href="https://github.com/jconway12/BeachBnb"><div><img src={window.gitURL} /></div></a>
                <a href="https://www.linkedin.com/in/jessica-conway-35120815b"><div><img src={window.linkedinURL} /></div></a>
                <a href="https://angel.co/jessica-conway-1"><div><img src={window.angellistURL} /></div></a>
            </footer>
        )
    }

}

export default Footer;