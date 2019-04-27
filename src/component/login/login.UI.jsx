import React, { Component } from 'react';

class LoginUIComponent extends Component {

    constructor(props){
        super(props);
        console.log('loginUI: ', this.props);
        console.log('loginUI: ', props);
        // console.log('loginUI: ', this.props.name);
        // console.log('loginUI: ', props.name);
    }

    componentWillMount() {
        // fetch('../mock/login.mock.json')
        // .then((response) => {
        //     console.log(response);
        // });
    }

    render() {
        return (
            <p>我是登录页</p>
        );
    }
}

export default LoginUIComponent;
