import React from 'react';

class Counter extends React.Component{
    constructor(){
        super()

        this.state = {
            count: 0,
        }
    }

    increase = () => this.setState({ count: this.state.count +1 })
    decrease = () => this.setState({ count: this.state.count - 1 })
    reset = () => this.setState({ count: 0})

    render(){
        const { count } = this.state;
        const { increase , decrease , reset } = this;
        return this.props.children({
            count,
            increase,
            decrease,
            reset,
        })
    }
    
}

export default Counter;