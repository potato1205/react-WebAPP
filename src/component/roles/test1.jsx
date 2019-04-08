import React, { Component } from 'react';
// import { render } from 'react-dom';

import ChildComponent from './ChildComponent.jsx';

export class HelloWorld extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            a: 0,
        }
    }
    // a = 0;

    render() {
        return (
            <div>
                <p onClick={this.clickHandle.bind(this)} style={{color : this.state.a ? 'blue' : 'red'}}>
                    hello world!
                </p>
                <p>
                    ??? 
                    {/* {this.clickHandle()} */}
                </p>
                <ChildComponent name="lhy" />
            </div>
        )
    }
    clickHandle() {
        console.log(this.state.a);
        if(this.state.a === 0) {
            this.setState({
                a: 1
            });
        } else {
            this.setState({
                a: 0
            });
        }
    }

    style() {
        if(this.a) {
            return {
                color: 'red',
            }
        } else {
            return {
                color: 'blue',
            }
        }
    }

}

// export HelloWorld;