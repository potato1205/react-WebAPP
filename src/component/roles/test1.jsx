import React, { Component } from 'react';
// import { render } from 'react-dom';

export class HelloWorld extends Component {

    constructor(...arges) {
        super(...arges);
    }
    render () {
        return (
            <p>
                hello world!
            </p>
        )
    }
}

// render (
//     <HelloWorld/>,
//     document.getElementById('hello')
// );

// export HelloWorld;