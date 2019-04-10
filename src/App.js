import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ChildComponent from './component/roles/ChildComponent';
import Child2Compon from './component/roles/Child2Compon';

import HomeComponent from './component/home.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/repos" component={ChildComponent} />
          <Route path="/about" component={Child2Compon} />
          <Route path="/home" component={HomeComponent} />
      </BrowserRouter>
    );
  }
}

export default App;
