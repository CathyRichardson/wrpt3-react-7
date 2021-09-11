import React from 'react';
import withCounter from './withCounter';

class Counter2 extends React.Component {
    render(){
        return (
            <>
                <h1>{this.props.name}</h1>
                <div>
                    {this.props.count <= 5 ? this.props.count : 5}
                </div>
                <button onClick={this.props.increseCount}>Increase</button>
                <button onClick={this.props.decreaseCount}>Decrease</button>
                <button onClick={this.props.resetCount}>Reset</button>
            </>

        )
    }
}

export default withCounter(Counter2);