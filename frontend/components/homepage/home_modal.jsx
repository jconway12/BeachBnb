// import React from 'react';
// // import DatePicker from './calendar';
// import { withRouter } from 'react-router-dom';
// import 'react-dates/initialize';
// import { SingleDatePicker } from 'react-dates';
// import moment from 'moment'
import {connect} from 'react-redux';
import { openModal, closeModal } from "../../actions/modal_actions";

import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar';
import HomepageComponent from './homepage';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import Modal from '../modal/modal';
import CitiesIndex from "../cities/cities_index";


class HomeModal extends React.Component {
    componentDidMount() {
        this.props.openModal('login');
    }

    render() {
    return (
        <>
            <div id="nav-homepage">
                <Modal />
                <header id='nav-bar-container'>
                    <NavBarContainer home={true} />
                </header>
                <HomepageComponent />
                <CitiesIndex />
                <footer id='home-footer'>
                    <a href="https://github.com/jconway12/BeachBnb"><div><img src={window.gitURL} /></div></a>
                    <a href="https://www.linkedin.com/in/jessica-conway-35120815b"><div><img src={window.linkedinURL} /></div></a>
                    <a href="https://angel.co/jessica-conway-1"><div><img src={window.angellistURL} /></div></a>
                </footer>
            </div>
        </>
    )
    }
}

const msp = state => {
    return {}
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(HomeModal);
