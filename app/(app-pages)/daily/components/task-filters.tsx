'use client';
import Button from '@/app/components/UI/button';
import type { TaskStatusOption } from '@/app/lib/types/types';

type TaskFilter = TaskStatusOption | 'all';

export default function TaskFilters({
  activeTab,
  setActiveTab,
}: {
  activeTab: TaskFilter;
  setActiveTab: (tab: TaskFilter) => void;
}) {
  function handleActivate(tab: TaskFilter) {
    setActiveTab(tab);
    console.log(tab);
  }

  return (
    <nav aria-label="Task filters" className="mb-mb-section">
      <ul className="flex gap-gap-sm overflow-x-auto scrollbar-hidden">
        <li>
          <Button
            type="button"
            size="sm"
            variant={activeTab === 'all' ? 'primary' : 'deactive'}
            onClick={handleActivate.bind(null, 'all')}
          >
            All
          </Button>
        </li>
        <li>
          <Button
            type="button"
            size="sm"
            variant={activeTab === 'to do' ? 'primary' : 'deactive'}
            onClick={handleActivate.bind(null, 'to do')}
          >
            Todo
          </Button>
        </li>
        <li>
          <Button
            type="button"
            size="sm"
            variant={activeTab === 'in progress' ? 'primary' : 'deactive'}
            onClick={handleActivate.bind(null, 'in progress')}
          >
            In Progress
          </Button>
        </li>
        <li>
          <Button
            type="button"
            size="sm"
            variant={activeTab === 'done' ? 'primary' : 'deactive'}
            onClick={handleActivate.bind(null, 'done')}
          >
            Completed
          </Button>
        </li>
      </ul>
    </nav>
  );
}
