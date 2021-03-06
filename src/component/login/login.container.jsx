import React, { Component } from 'react';

import LoginUIComponent from './login.UI';

import http from '../../server/server';

class LoginContainerComponent extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <LoginUIComponent
                loginFunc={this.login}
            />
        );
    }

    async login() {
        console.log(this.params);
        const res = await http.post('/users/getUserInfo', this.params);
        console.log(res);
    }
}

export default LoginContainerComponent;
