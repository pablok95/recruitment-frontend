import types from "./types";

const add = (item) => ({
    type: types.ADD_TASK,
    item
})

const remove = (item) => ({
    type: types.REMOVE_TASK,
    item
})

const changeStatus = (item) => ({
    type: types.CHANGE_STATUS,
    item,
})

export default  {
    add,
    remove,
    changeStatus
}