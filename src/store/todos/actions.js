import types from './types';

const add = (item) => ({
  type: types.ADD_TASK,
  item
});

const remove = (id) => ({
  type: types.REMOVE_TASK,
  id
});

const changeStatus = (item) => ({
  type: types.CHANGE_STATUS,
  item
});

export default {
  add,
  remove,
  changeStatus
};
