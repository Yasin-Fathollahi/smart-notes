import CardIcon from '@/app/components/UI/icon-card';
import briefcaseIcon from '@/public/icons/briefcase.svg';
import ClockIcon from '@/public/icons/time-circle.svg';

type TaskProps = {
  status: 'done' | 'in progress' | 'to do';
};

export default function Task({ status }: TaskProps) {
  return (
    <li className="card flex justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="text-body-sm text-text-muted">
          Grocery shopping app design
        </h2>
        <p className="text-body-base font-body-regular">Market Research</p>
        <div className="flex gap-1.5 items-center">
          <ClockIcon />
          <p className="text-body-sm font-body-regular text-primary-lighter">
            07:00 PM
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <CardIcon size="sm" colorName="pink" hasBg icon={briefcaseIcon} />
        <p className="text-body-sm text-blue bg-blue-light px-1.5 rounded-circle capitalize">
          {status}
        </p>
      </div>
    </li>
  );
}
