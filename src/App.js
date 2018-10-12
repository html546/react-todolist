import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    render() {
        return (
            <>
                <div className={this.state.show ? 'show' : 'hide'}>Hello</div>
                <button onClick={this.handleToggle}>Toggle</button>
            </>
        )
    }
    handleToggle() {
        this.setState({
            show: !this.state.show
        })
    }
}
export default App;