import { TaskStatusOption } from '@/src/types/types';

type TaskStatusProps = {
  status: TaskStatusOption;
};

export default function TaskStatus({ status }: TaskStatusProps) {
  let colors: string;
  if (status === 'done') {
    colors = 'text-primary bg-primary-light';
  } else if (status === 'in progress') {
    colors = 'text-orange bg-orange-light';
  } else {
    colors = 'text-blue bg-blue-light';
  }
  const classes = `text-body-sm ${colors} px-1.5 rounded-circle capitalize`;
  return <p className={classes}>{status}</p>;
}
