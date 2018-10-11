import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleInputChange() {
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list };
        })
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem
                key={item}
                content={item}
                deleteItem={this.handleItemDelete}
                index={index}
            />
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.handleBtnClick}>add</button>
                    <ul ref={(ul) => { this.ul = ul }}>
                        {
                            this.getTodoItem()
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}
export default TodoList;