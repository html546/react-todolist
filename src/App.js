import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render() {
        return (
            <>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => { el.style.color = 'blue' }}
                                    appear={true}
                                    key={index}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>Toggle</button>
            </>
        )
    }
    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}
export default App;