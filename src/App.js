import OrganismAppHeader from 'components/organisms/AppHeader';
import OrganismAddTask from 'components/organisms/AddTask';
import OrganismTaskList from 'components/organisms/TaskList';
import OrganismAppFooter from 'components/organisms/AppFooter';

import 'App.styles.scss';

export default function App() {
  return (
    <div className="app">
      <OrganismAppHeader />
      <OrganismAddTask />
      <OrganismTaskList />
      <OrganismAppFooter />
    </div>
  );
}
