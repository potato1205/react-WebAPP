import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import UserListComponent from './main/user-list.component';
import UserListTestComponent from './main/user-list-test.component';
import ReduxTestComponent from './roles/redux-test.component';

import reducerHome from '../config/reducer.config'

class HomeComponent extends Component {

  constructor(props, state) {
    super();
    this.state = {
      name: 'lhy',
      // count: 0,
    }
  }

  componentWillMount() {
    // reducer返回的是一个全新的state，而不是修改原先的state，而且，reducer是一个纯函数

    this.setState({
      store: createStore(reducerHome),
      count: 0,
    });
  }

  render() {
    return (
      <Provider store={this.state.store}>
        hhh 我是home component
        <p>count 是 {this.state.count}</p>
        <hr></hr>
        {/* ${} 感觉是表示在字符串中 对一个变量值的引用，表示解析 */}
        <p><Link to={`${this.props.match.path}/user-list/${this.state.store}`}>动态传值</Link></p>
        <p><Link to={`${this.props.match.path}/user-list-test?store=${this.state.store}`}>静态get方法传值</Link></p>
        <button onClick={this.toJump.bind(this)}>跳转</button>
        <Route path={`${this.props.match.path}/user-list/:store`}
          component={UserListComponent}
        ></Route>
        <Route path={`${this.props.match.path}/user-list-test`}
          component={UserListTestComponent}
        ></Route>
        <ReduxTestComponent store={this.state.store} />
      </Provider>
    );
  }

  componentDidMount() {
    console.log(this.state);
    this.state.store.subscribe(() => {
      console.log(this.state.store.getState());
      this.setState({
        count: this.state.store.getState().reducerText.count,
      });
    });
  }

  toJump() {
    this.props.history.push(`${this.props.match.path}/user-list`);
  }

}

export default HomeComponent;
