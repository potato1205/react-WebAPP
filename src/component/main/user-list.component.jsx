import React, { Component } from 'react';

class UserListComponent extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
          我是预留为 user list列表的 page 我佛了
          <p>
            名字是：{this.props.match.params.name}
          </p>
      </div>
    );
  }
}

export default UserListComponent;
