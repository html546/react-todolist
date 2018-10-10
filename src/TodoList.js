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
        /* this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }); */
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem
                key={index}
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
                    <input id="insertArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.handleBtnClick}>add</button>
                    <ul>
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