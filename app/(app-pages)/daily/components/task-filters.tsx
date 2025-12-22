import Button from '@/app/components/UI/button';

export default function TaskFilters() {
  return (
    <nav aria-label="Task filters" className="mb-mb-section">
      <ul className="flex gap-gap-sm overflow-x-auto pb-2 scrollbar-x">
        <li>
          <Button type="button" size="sm" variant="primary">
            All
          </Button>
        </li>
        <li>
          <Button type="button" size="sm" variant="deactive">
            Todo
          </Button>
        </li>
        <li>
          <Button type="button" size="sm" variant="deactive">
            In Progress
          </Button>
        </li>
        <li>
          <Button type="button" size="sm" variant="deactive">
            Completed
          </Button>
        </li>
      </ul>
    </nav>
  );
}
