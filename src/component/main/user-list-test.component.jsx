import React, { Component } from 'react';
import url from 'url';

class UserListTestComponent extends Component {

    constructor() {
        super();
        this.state = {
            componentName: 'user-list.test',
        }
    }

    componentWillMount() {
        console.log(this.props.location.search);
        let search = this.props.location.search;
        this.setState({
            testName: url.parse(search, true).query.name,
        });
    }

    render() {
        return (
            <div>
                我是为了测试传值而设置的page
          <p>
                    名字是：{this.state.testName}
                </p>
            </div>
        );
    }
}

export default UserListTestComponent;
