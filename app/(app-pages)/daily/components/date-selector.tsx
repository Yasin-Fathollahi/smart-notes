import DateCard from './date-card';

export default function DateSelector() {
  const length = 5;
  const dateRangeFixer = Math.floor(length / 2);

  const items = Array.from({ length }, (_, index) => (
    <DateCard key={index} index={index - dateRangeFixer} />
  ));

  return (
    <section aria-label="Date selector" className="mb-mb-section-lg">
      <ul className="flex justify-center gap-gap-sm">{items}</ul>
    </section>
  );
}
