import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ChildComponent from './component/roles/ChildComponent';
import Child2Compon from './component/roles/Child2Compon';
import ReduxTestComponent from './component/roles/redux-test.component'
import HomeComponent from './component/home.component';

import LoginContainerComponent from './component/login/login.container';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/" component={LoginContainerComponent} />
          <Route path="/registered" />

          <Route path="/repos" component={ChildComponent} />
          <Route path="/about" component={Child2Compon} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/redux-test" component={ReduxTestComponent} />
      </BrowserRouter>
    );
  }
}

export default App;
