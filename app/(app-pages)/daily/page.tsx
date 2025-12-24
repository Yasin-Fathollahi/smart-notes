import Header from '@/app/components/headers/regular-header';
import DateSelector from './components/date-selector';
import TaskFilters from './components/task-filters';
import TasksList from './components/tasks-list';

export default function TodaysTasks() {
  return (
    <div>
      <Header heading="Daily Tasks" />
      <main>
        <DateSelector />
        <TaskFilters />
        <TasksList />
      </main>
    </div>
  );
}
