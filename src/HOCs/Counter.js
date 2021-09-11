import React from 'react';
import withCounter from './withCounter';

class Counter extends React.Component {
    render(){
        return (
            <>
                <div>
                    {this.props.count}
                </div>
                <button onClick={this.props.increseCount}>Increase</button>
                <button onClick={this.props.decreaseCount}>Decrease</button>
                <button onClick={this.props.resetCount}>Reset</button>
            </>

        )
    }
}

export default withCounter(Counter);