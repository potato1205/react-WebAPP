import React, { Component } from 'react';

import './login.css';

import avtar from '../../assets/images/avtar.png';

class LoginUIComponent extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }
    
    componentWillMount() {
    }

    render() {
        return (
            <div>
                <h1>klasikal Login Form</h1>
                <div class="login-form">
                    <div class="close"> </div>
                    <div class="head-info">
                        <label class="lbl-1"> </label>
                        <label class="lbl-2"> </label>
                        <label class="lbl-3"> </label>
                    </div>
                    <div class="clear"> </div>
                    <div class="avtar">
                        <img src={avtar} />
                    </div>
                    {/* <form> */}
                    <input type="text" class="text" />
                    <div class="key">
                        <input type="password" />
                    </div>
                    {/* </form> */}
                    <div class="signin">
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginUIComponent;
