import DateCard from './date-card';

export default function DateSelector() {
  return (
    <section aria-label="Date selector" className="mb-mb-section-lg">
      <ul className="flex gap-gap-sm">
        <DateCard day={25} dayOfWeek="sunday" month="may" />
        <DateCard day={25} dayOfWeek="sunday" month="may" />
        <DateCard day={25} dayOfWeek="sunday" month="may" isActive />
        <DateCard day={25} dayOfWeek="sunday" month="may" />
        <DateCard day={25} dayOfWeek="sunday" month="may" />
      </ul>
    </section>
  );
}
