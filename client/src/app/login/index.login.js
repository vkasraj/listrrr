import React from "react";
import { connect } from "react-redux";

import FormLayout from "../../components/form/form.layout";
import LoginForm from "./login.form";
import { login } from "../../store/actions/index.action";

const initialValues = { username: "", password: "" };

const Login = ({ $login, _loading }) => {
    return (
        <FormLayout>
            <LoginForm
                loading={_loading}
                initialValues={initialValues}
                onSubmit={$login}
            />
        </FormLayout>
    );
};

const mapStateToProps = ({ http: { request } }) => ({
    _loading: request.login
});

const mapDispatchToProps = dispatchEvent => ({
    $login: val => dispatchEvent(login(val))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
