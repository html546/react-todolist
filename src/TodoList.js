import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                        return <li onClick={handleDelete.bind(this,index)} key={index}>{item}</li>
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
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            // console.log(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);