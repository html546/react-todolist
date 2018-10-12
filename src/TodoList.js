import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
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
    componentDidMount() {
        axios.get('api/todolist')
            .then((res) => {
                this.setState(() => ({
                    list: [...res.data]
                }))
            })
            .catch(() => alert('error'));
    }
    handleBtnClick() {
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
                    />
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