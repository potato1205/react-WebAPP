import React, { Component } from 'react';
// import { render } from 'react-dom';

class Child2Compon extends Component {

    constructor(props, context) {
        super(props, context);

        console.log(this.props);
    }
    // a = 0;

    render() {
        return (
            <div>
                我是子组件2号。{this.props.name}
            </div>
        )
    }

}

export default Child2Compon;
