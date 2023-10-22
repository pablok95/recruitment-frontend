import { connect } from 'react-redux';

import MoleculeTaskItem from 'components/molecules/TaskItem';
import { isTaskCompleted } from 'helpers';

import './TaskList.styles.scss';

function OrganismTaskList({ list, completedList }) {
  return (
    <main className="container task-list">
      <div className="task-list__wrapper">
        <h3 className="text-header-2">Tasks</h3>
        <ul className="task-list__list">
          {list.map((item) => (
            <MoleculeTaskItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      {completedList.length ? (
        <div className="task-list__wrapper">
          <h3 className="text-header-2">Completed</h3>
          <ul className="task-list__list task-item__wrapper--margin-top">
            {completedList.map((item) => (
              <MoleculeTaskItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      ) : null}
    </main>
  );
}

const mapStateToProps = (state) => ({
  list: state.todos.list
    ?.filter((item) => !isTaskCompleted(item.status))
    .sort((a, b) => b.createdAt - a.createdAt),
  completedList: state.todos.list?.filter((item) => isTaskCompleted(item.status))
});

export default connect(mapStateToProps, undefined)(OrganismTaskList);
