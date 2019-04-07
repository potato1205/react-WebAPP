import React, { Component } from 'react';
// import { render } from 'react-dom';

class ChildComponent extends Component {

    constructor(props, context) {
        super(props, context);

        console.log(this.props);
    }
    // a = 0;

    render() {
        return (
            <div>
                我是子组件。{this.props.name}
            </div>
        )
    }

}

export default ChildComponent;
