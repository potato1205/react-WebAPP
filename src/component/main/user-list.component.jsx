import React, { Component } from 'react';

class UserListComponent extends Component {

  storeValue;

  componentWillMount() {
    console.log();
    this.setState({
      store: this.props.match.params.store,
    });

    // this.store.subscribe(() => {
    //   this.storeValue = this.state.store.getState();
    // });
    console.log(this.props)
  }

  render() {
    
    return (
      <div>
          我是预留为 user list列表的 page 我佛了git
          <p>
            名字是：{this.storeValue}
          </p>
      </div>
    );
  }

  componentDidMount() {

  }
}

export default UserListComponent;
