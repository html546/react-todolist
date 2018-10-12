import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el)=>{el.style.color='blue'}}
                    appear={true}
                >
                    <div>Hello</div>
                </CSSTransition>
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