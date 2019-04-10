import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'

import ChildComponent from './ChildComponent.jsx';

function HelloComponent(props) {
    return <div>Hello world {props.name}</div>
}

export class HelloWorld extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            a: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('this.state.a: ', this.state.a);
        console.log('nextState.a: ', nextState.a);
        return true;
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('this.state.a  render: ', this.state.a);
        return (
            <div>
                <p onClick={this.clickHandle.bind(this)} style={{ color: this.state.a ? 'blue' : 'red' }}>
                    hello world!
                </p>
                <p>
                    ???
                    {/* {this.clickHandle()} */}
                </p>
                <ChildComponent name="lhy" />
                <HelloComponent name="lhy 2"/>
                <hr/>
                {/* <ES5Component name="init"/> */}
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    
    clickHandle() {
        console.log(this.state.a);
        if (this.state.a === 0) {
            this.setState({
                a: 1
            });
        } else {
            this.setState({
                a: 0
            });
        }
        console.log(this.state.a);
    }

    style() {
        if (this.a) {
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