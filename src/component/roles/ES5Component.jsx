import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';


const ES5Component = React.createClass({
    propTypes: {//定义传入props中的属性各种类型
        name: PropTypes.String,
    },
    defaultProps: { //组件默认的props对象
        name: ''
    },
    // 设置 initial state
    getInitialState: function() {//组件相关的状态对象
        return {
            text: this.props.name || 'placeholder'
        };
    },
    handleChange: function(event) {
        this.setState({ //this represents react component instance
            text: event.target.value
        });
    },
    render: function() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange} value={this.state.text} />
            </div>
        );
    }
});

export default ES5Component;
