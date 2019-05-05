import React, { Component } from 'react';
import './login.css';
import avtar from '../../assets/images/avtar.png';
import http from '../../server/server';

class LoginUIComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
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
                    <input type="text" className="text" onChange={this.changeUserName.bind(this)} />
                    <div className="key">
                        <input type="password" onChange={this.changePassword.bind(this)} />
                    </div>
                    {/* </form> */}
                    <div className="signin">
                        <input type="submit" value="Login" onClick={this.login.bind(this)}/>
                    </div>
                </div>
            </div >
        );
    }

    async login() {
        console.log(this.state);
        let params = {
            username: this.state.username,
            password: this.state.password,
        }
        const res = await http.get('/users/getUserInfo', params);
        console.log(res);
    }

    changeUserName(e) {
        this.setState({
            username: e.target.value,
        });
    }

    changePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }
}

export default LoginUIComponent;
