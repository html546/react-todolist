import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actiontypes';

export const changeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})