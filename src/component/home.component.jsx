import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import UserListComponent from './main/user-list.component'

class HomeComponent extends Component {

  constructor(props, state) {
    super();
  }

  componentWillMount() {
    console.log(this.props.match);
  }

  render() {
    return (
      <div>
          hhh 我是home component
          {/* ${} 感觉是表示在字符串中 对一个变量值的引用，表示解析 */}
          <p><Link to={`${this.props.match.path}/user-list`}>跳转</Link></p>
          <button onClick={this.toJump.bind(this)}>跳转</button>
          <Route path={`${this.props.match.path}/user-list`} component={UserListComponent}></Route>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.match);
  }

  toJump() {
    // console.log(this.props.data.link);
    this.props.history.push(`${this.props.match.path}/user-list`);
  }

}

export default HomeComponent;
