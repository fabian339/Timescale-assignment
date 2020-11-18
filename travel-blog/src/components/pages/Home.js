import React, { Component } from 'react';

export default class Home extends Component {
    state = {
        timerId: 0,
        seconds: 5
    }

    componentDidMount(){
        this.setState({timerId: setInterval(this.countDown,1000)})
    }

    componentWillUnmount(){
        clearInterval(this.state.timerId);
        this.setState({seconds: 5, timerId: 0})
    }

    countDown = () => {
        if (this.state.seconds <= 0){
            this.componentWillUnmount()
            this.props.history.push("/about")
        } else this.setState({seconds: this.state.seconds - 1})
    }

    render(){
        return (
            <div className="timer-container">
                <p style={{margin: "125px 0px", fontSize: "35px"}}>Redirecting to About page in: {this.state.seconds}</p>                        
            </div>
        );
    }
}
