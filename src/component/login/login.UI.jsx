import React, { Component } from 'react';

import './login.css';

import avtar from '../../assets/images/avtar.png';

class LoginUIComponent extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.loginFunc);
    }
    
    componentWillMount() {
    }

    render() {
        return (
            <div>
                <h1>klasikal Login Form</h1>
                <div className="login-form">
                    <div className="close"> </div>
                    <div className="head-info">
                        <label className="lbl-1"> </label>
                        <label className="lbl-2"> </label>
                        <label className="lbl-3"> </label>
                    </div>
                    <div className="clear"> </div>
                    <div className="avtar">
                        <img src={avtar} />
                    </div>
                    {/* <form> */}
                    <input type="text" className="text" />
                    <div className="key">
                        <input type="password" />
                    </div>
                    {/* </form> */}
                    <div className="signin">
                        <input type="submit" value="Login" onClick={this.props.loginFunc}/>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginUIComponent;
