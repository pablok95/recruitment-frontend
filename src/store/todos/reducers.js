import types from "./types";

const INITIAL_STATE = {
    todos: ['test']
}

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            console.log('ADD', action)
            return {
                ...state, todos: [...state.todos, action.item]
            }

        case types.REMOVE_TASK:
            console.log('REMOVE')
            return {...state}

        default:
            return state
    }
}

export default todosReducer