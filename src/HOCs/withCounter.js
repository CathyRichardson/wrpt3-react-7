import React from 'react';

const withCounter = (Component) => {
    return class extends React.Component{
        constructor(props){
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        increseCount = () => this.setState({ count: this.state.count +1 })
        decreaseCount = () => this.setState({ count: this.state.count - 1 })
        resetCount = () => this.setState({ count: 0})

        render(){
            return(
                <Component 
                 {...this.props}
                 count={this.state.count}
                 increseCount={this.increseCount}
                 decreaseCount={this.decreaseCount}
                 resetCount={this.resetCount}
                 />
            )
        }
    }
}

export default withCounter;