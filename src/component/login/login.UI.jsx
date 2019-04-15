import React, { Component } from 'react';

class LoginUIComponent extends Component {

    componentWillMount() {
        fetch('../mock/login.mock.json')
        .then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <p>我是登录页</p>
        );
    }
}

export default LoginUIComponent;
