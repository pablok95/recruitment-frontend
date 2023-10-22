import dayjs from 'dayjs';

import types from './types';
import { TASK_STATUSES } from 'constants.js';

const INITIAL_STATE = {
  list: [
    {
      id: 1,
      title: 'Task 1',
      description: 'Lorem ipsum...',
      status: TASK_STATUSES.TODO,
      createdAt: dayjs()
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Lorem ipsum...',
      status: TASK_STATUSES.TODO,
      createdAt: dayjs()
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Lorem ipsum...',
      status: TASK_STATUSES.TODO,
      createdAt: dayjs()
    }
  ]
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      const latestIndex = Math.max(...state.list.map((item) => item.id), 0);
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...action.item,
            id: latestIndex + 1,
            status: TASK_STATUSES.TODO,
            createdAt: dayjs()
          }
        ]
      };

    case types.REMOVE_TASK:
      return { ...state, list: state.list.filter((item) => item.id !== action.id) };

    case types.CHANGE_STATUS:
      const status =
        action.item.status !== TASK_STATUSES.COMPLETED
          ? TASK_STATUSES.COMPLETED
          : TASK_STATUSES.TODO;

      return {
        ...state,
        list: state.list.map((item) => (item.id === action.item.id ? { ...item, status } : item))
      };

    default:
      return state;
  }
};

export default todosReducer;
