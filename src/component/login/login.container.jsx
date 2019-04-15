import React, { Component } from 'react';

class LoginContainerComponent extends Component {

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <p>我是登录页</p>
        );
    }
}

export default LoginContainerComponent;
