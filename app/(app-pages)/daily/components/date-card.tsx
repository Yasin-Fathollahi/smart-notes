import { dateSplitter } from '@/app/lib/utils/helpers';

export default function DateCard({ index }: { index: number }) {
  const now = new Date();
  const cardDate = new Date(now.setDate(now.getDate() + index));
  const { dayOfMonth, dayOfWeek, month } = dateSplitter(cardDate);
  return (
    <li>
      <button
        type="button"
        className={`date-card ${index === 0 && 'bg-primary text-white'}`}
      >
        <p className="text-body-xs capitalize">{month}</p>
        <p className="text-body-lg">{dayOfMonth}</p>
        <p className="text-body-xs capitalize">{dayOfWeek}</p>
      </button>
    </li>
  );
}
