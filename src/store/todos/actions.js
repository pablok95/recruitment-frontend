import types from "./types";

const add = (item) => ({
    type: types.ADD_TASK,
    item
})

const remove = (item) => ({
    type: types.REMOVE_TASK,
    item
})

export default  {
    add,
    remove
}