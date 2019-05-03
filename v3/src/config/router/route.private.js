import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({
    _authenticated,
    path,
    component: Component,
    routes,
    failureRedirect,
    ...props
}) => {
    return (
        <Route
            path={path}
            {...props}
            render={props => {
                return _authenticated ? (
                    <Component routes={routes} {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: failureRedirect,
                            state: {
                                from: props.location
                            }
                        }}
                    />
                );
            }}
        />
    );
};

const mapStateToProps = ({ auth }) => ({
    _authenticated: auth.user ? true : false
});

export default connect(mapStateToProps)(PrivateRoute);
