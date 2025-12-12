import ChevronDown from '@/public/icons/Arrow - Down 2.svg';
import Calender from '@/public/icons/calendar.svg';

export default function DateInput({ label }: { label: string }) {
  return (
    <div className="input flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Calender
          width={24}
          height={24}
          className="fill-primary-semi-light/80"
        />
        <div className="flex flex-col items-start gap-0.5">
          <p className="input-label">{label}</p>
          <p className="text-body-base font-body-regular">30 June, 2022</p>
        </div>
      </div>
      <ChevronDown width={24} height={24} />
    </div>
  );
}
