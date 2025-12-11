import type { DayOfWeek, Month } from '@/src/types/types';

type DateCardProps = {
  month: Month;
  day: number | string;
  dayOfWeek: DayOfWeek;
  isActive?: boolean;
};
export default function DateCard({
  month,
  day,
  dayOfWeek,
  isActive,
}: DateCardProps) {
  return (
    <li>
      <button
        type="button"
        className={`date-card ${isActive && 'bg-primary text-white'}`}
      >
        <p className="text-body-xs capitalize">{month}</p>
        <p className="text-body-lg">{day}</p>
        <p className="text-body-xs capitalize">{dayOfWeek.split('day')[0]}</p>
      </button>
    </li>
  );
}
