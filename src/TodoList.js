import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInputValueAction, addItemAction, deleteItemAction } from './store/actioncreator';
const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, list, handleDelete } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={handleDelete.bind(this, index)} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
/* class TodoList extends Component {
    render() {
        const { inputValue, changeInputValue, handleClick, list, handleDelete } = this.props;
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue} />
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li onClick={handleDelete(index)} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
} */
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    };
}
// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeInputValueAction(e.target.value);
            // console.log(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = addItemAction();
            dispatch(action);
        },
        handleDelete(index) {
            const action = deleteItemAction(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);