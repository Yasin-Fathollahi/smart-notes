'use client';
import Header from '@/app/components/headers/regular-header';
import DateSelector from './components/date-selector';
import TaskFilters from './components/task-filters';
import TasksList from './components/tasks-list';
import { useState } from 'react';
import type { TaskStatusOption } from '@/app/lib/types/types';

type TaskFilter = TaskStatusOption | 'all';

export default function TodaysTasks() {
  const [activeTab, setActiveTab] = useState<TaskFilter>('all');

  return (
    <div className="h-full flex flex-col">
      <Header heading="Daily Tasks" />

      <main className="flex flex-col flex-1 min-h-0">
        <DateSelector />
        <TaskFilters activeTab={activeTab} setActiveTab={setActiveTab} />
        <TasksList />
      </main>
      <div className="h-h-nav" aria-hidden />
    </div>
  );
}
