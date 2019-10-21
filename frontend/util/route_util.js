import React from 'react';
import { HashRouter, withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);


const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/home/modal" /> //automaticaly open sign up modal?
        }
    />
);

const mapStateToProps2 = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
);