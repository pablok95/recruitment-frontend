import { useState } from 'react';
import { connect } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { todosActions } from 'store/todos';
import useInterval from 'composables/useInterval';
import AtomBadge from 'components/atoms/Badge';
import { isTaskCompleted } from 'helpers';

import './TaskIten.styles.scss';
import { toastr } from 'react-redux-toastr';

function MoleculeTaskItem({ item, changeTaskStatus, removeTask }) {
  const { id, title, description, status, createdAt } = item;
  const [createdAtFromNow, setCreatedAtFromNow] = useState(createdAt.fromNow());

  useInterval(
    () => {
      setCreatedAtFromNow(createdAt.fromNow());
    },
    createdAt && isTaskCompleted(status) ? 30000 : null
  );

  const handleToggle = () => {
    changeTaskStatus(item);
    toastr.success('Status has been changed', `Title: ${title}`);
  };

  const handleRemoveTask = (e) => {
    e.stopPropagation();
    removeTask(id);
    toastr.error('Task has been removed', `Title: ${title}`);
  };

  return (
    <li
      className={`task-item ${isTaskCompleted(status) ? 'task-item--completed' : ''}`}
      onClick={handleToggle}
    >
      <div className="task-item__wrapper">
        <div className="task-item__details">
          {!isTaskCompleted(status) && (
            <span className="text-label task-item__details-time">{createdAtFromNow}</span>
          )}
          <span className="text-header-3 task-item__details-title">{title}</span>
          <span className="text-description">{description}</span>
        </div>
        <AtomBadge label={status} status={status} />
      </div>
      <button className="button-icon" onClick={handleRemoveTask}>
        <RiDeleteBin6Line />
      </button>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (item) => dispatch(todosActions.remove(item)),
  changeTaskStatus: (item) => dispatch(todosActions.changeStatus(item))
});

export default connect(undefined, mapDispatchToProps)(MoleculeTaskItem);
