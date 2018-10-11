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