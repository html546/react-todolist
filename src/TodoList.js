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
    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
        console.log('componentWillMount');
    }
    // 组件被挂载到页面之后，自动被执行
    componentDidMount(){
        console.log('componentDidMount');
    }
    // 组件被更新之前，他会自动被执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }
    // 组件被更新之前,它会自动执行，但是他在shouldComponentUpdate之后被执行,
    // 如果shouldComponentUpdate返回true它才执行
    // 如果返回false,这个函数就不会被执行了
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    // 组件更新完成之后，它会被执行
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
   
    handleBtnClick() {
        /* this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }); */
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),()=>{
            console.log(this.ul.querySelectorAll('div').length)
        })
        // console.log(this.ul.querySelectorAll('div').length);
    }
    handleInputChange() {
        const value = this.input.value;
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
                key={item}
                content={item}
                deleteItem={this.handleItemDelete}
                index={index}
            />
        })
    }
    render() {
        console.log('render');
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