import React, { Component } from 'react';

class ReduxTestComponent extends Component {

    componentWillMount() {

        // this.props.store.subscribe(() => {
        //     console.log(this.props.store.getState());
        // });


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
        this.props.store.dispatch({
            type: 'INCREASE',
        });
    }

    reduce() {
        this.props.store.dispatch({
            type: 'DECREASE',
        });
    }
}

export default ReduxTestComponent;
