import { TaskStatusOption } from '@/src/types/types';

type TaskStatusProps = {
  status: TaskStatusOption;
};

export default function TaskStatus({ status }: TaskStatusProps) {
  let color: 'blue' | 'primary' | 'orange';
  if (status === 'done') {
    color = 'primary';
  } else if (status === 'in progress') {
    color = 'orange';
  } else {
    color = 'blue';
  }
  const classes = `text-body-sm text-${color} bg-${color}-light px-1.5 rounded-circle capitalize`;
  return <p className={classes}>{status}</p>;
}
