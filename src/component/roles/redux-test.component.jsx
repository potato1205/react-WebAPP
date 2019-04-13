import React, { Component } from 'react';

class ReduxTestComponent extends Component {

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                我是redux之子页面
                <p>
                    <button onClick={this.add.bind(this)}>点击，让父组件增加一</button>
                    <button onClick={this.reduce.bind(this)}>点击，让父组件减少一</button>
                </p>
            </div>
        );
    }

    componentDidMount() {

    }

    add() {
        console.log(this.props);
        this.props.store.dispatch({
            // reducerText: {
                type: 'INCREASE',
                count: 2,
            // }
        });
    }

    reduce() {
        this.props.store.dispatch({
            type: 'DECREASE',
            count: 5,
        });
    }
}

export default ReduxTestComponent;
