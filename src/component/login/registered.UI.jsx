import React, { Component } from 'react';
import http from '../../server/server';
import './registered.css';

class RegisterdUIComponent extends Component {

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
            <div class="wrap">
                <form href="doLogn" method="post">
                    <input type="hidden" name="state" value="1"></input>
                    <div style={{width: '100%', height: '60px', textAlign: 'center', lineHeight: '60px', fontSize: '20px'}}>系统注册</div>
                    <div class="login-form" style={{ background: '#f6f6f6', border: '1px solid #aaaaaa', marginTop: '0' }}>
                        <ul>
                            <li id="a" style={{ display: 'flex', width: '100%' }}>
                                <label style={{ width: '300px', height: '42px', lineHeight: '70px', textAlign: 'right', marginRight: '20px' }}>手机号*</label>
                                <div>
                                    <input type="text" name="password" id="userName" placeholder="用户名" style={{ marginTop: '0', width: '270px', }} />
                                </div>
                            </li>
                            <li id="b" style={{ display: 'flex', width: '100%' }}>
                                <label style={{ width: '300px', height: '42px', lineHeight: '70px', textAlign: 'right', marginRight: '20px' }}>密码*</label>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="密码" style={{ width: '270px' }}></input>
                                </div>
                            </li>
                            <li id="b" style={{ display: 'flex', width: '100%' }}>
                                <label style={{ width: '300px', height: '42px', lineHeight: '70px', textAlign: 'right', marginRight: '20px' }}>身份证号/法人身份证号*</label>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="身份证号/法人身份证号" style={{ width: '270px' }}></input>
                                </div>
                            </li>
                            <li id="b" style={{ display: 'flex', width: '100%' }}>
                                <label style={{ width: '300px', height: '42px', lineHeight: '70px', textAlign: 'right', marginRight: '20px' }}>真实姓名/法人姓名*</label>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="真实姓名/法人姓名" style={{ width: '270px' }}></input>
                                </div>
                            </li>
                            <li id="b" style={{ display: 'flex', width: '100%' }}>
                                <label style={{ width: '300px', height: '42px', lineHeight: '70px', textAlign: 'right', marginRight: '20px' }}>所属公司</label>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="所属公司" style={{ width: '270px' }}></input>
                                </div>
                            </li>
                            <li id="b" style={{ display: 'flex', width: '100%' }}>
                                <label style={{ width: '300px', height: '42px', lineHeight: '70px', textAlign: 'right', marginRight: '20px' }}>工商编号</label>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="工商编号" style={{ width: '270px' }}></input>
                                </div>
                            </li>
                            {/* <li id="c">
                                <label>验证码</label>
                                <span > <img id="imgVerify" src="" alt="获取验证码失败" width="95" height="25" />
                                </span>
                                <div>
                                    <input type="text" name="code" id="code"></input>
                                    <a class="hqyzm" id="newCode">获取验证码</a>
                                </div>
                            </li> */}

                        </ul>
                    </div>
                </form>
                <div class="log">
                    <a id="submit">注册</a>
                </div>
                <div class="log-more">
                    <a class="btn-reg" href="/login">马上登陆&nbsp;&nbsp;</a>|
        <a class="btn-psw" href="">&nbsp;&nbsp;忘记密码</a>
                </div>
            </div>
            // <div class="" style={{width: '300px', height: '300px', background: '#000000'}}>
            //     这是一个测试
            // </div>
        );
    }

    async login() {
        let params = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log('params: ', params);
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


export default RegisterdUIComponent;
