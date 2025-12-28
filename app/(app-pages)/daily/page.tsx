import Header from '@/app/components/headers/regular-header';
import DateSelector from './components/date-selector';
import TaskFilters from './components/task-filters';
import TasksList from './components/tasks-list';

export default function TodaysTasks() {
  return (
    <div className="h-full flex flex-col">
      <Header heading="Daily Tasks" />

      <main className="flex flex-col flex-1 min-h-0">
        <DateSelector />
        <TaskFilters />
        <TasksList />
      </main>
      <div className="h-h-nav" aria-hidden />
    </div>
  );
}
