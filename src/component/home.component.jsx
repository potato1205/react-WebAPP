import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import UserListComponent from './main/user-list.component';
import UserListTestComponent from './main/user-list-test.component';

class HomeComponent extends Component {

  constructor(props, state) {
    super();
    this.state = {
      name: 'lhy',
    }
  }

  componentWillMount() {
    // console.log(this.props.match);
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
          hhh 我是home component
          {/* ${} 感觉是表示在字符串中 对一个变量值的引用，表示解析 */}
          <p><Link to={`${this.props.match.path}/user-list/${this.state.name}`}>动态传值</Link></p>
          <p><Link to={`${this.props.match.path}/user-list-test?name=${this.state.name}`}>静态get方法传值</Link></p>
          <button onClick={this.toJump.bind(this)}>跳转</button>
          <Route path={`${this.props.match.path}/user-list/:name`}
                 component={UserListComponent}
          ></Route>
          <Route path={`${this.props.match.path}/user-list-test`}
                 component={UserListTestComponent}
          ></Route>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match);
  }

  toJump() {
    this.props.history.push(`${this.props.match.path}/user-list`);
  }

}

export default HomeComponent;
