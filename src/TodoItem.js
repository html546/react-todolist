import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
    }
    render() {
        console.log('child render');
        const { content } = this.props;
        return (
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    index: PropTypes.number.isRequired,
    deleteItem: PropTypes.func.isRequired
}
export default TodoItem;