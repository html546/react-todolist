import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        const { deleteItem, index } = this.props;
        // this.props.delete1(this.props.index);
        deleteItem(index);
    }
    // 当一个组件要从父组件接受参数
    // 只要父组件的render函数被重新执行了,子组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在与父组件中,才会执行
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render() {
        const { content, test } = this.props;
        return (
            <div onClick={this.handleDelete}>{test} - {content}</div>
        )
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    index: PropTypes.number.isRequired,
    deleteItem: PropTypes.func.isRequired
}
TodoItem.defaultProps = {
    test: 'Hello World'
}
export default TodoItem;