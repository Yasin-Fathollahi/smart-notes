import { type ReactNode } from 'react';
import capitalizeEachWord from '@/app/lib/utils/cap-words';

type RegularSectionProps = {
  children: ReactNode;
  heading: string;
  itemCount: number;
};

export default function RegularSection({
  children,
  heading,
  itemCount,
}: RegularSectionProps) {
  return (
    <section className="mb-mb-section">
      <div className="flex gap-1.5  items-center mb-mb-section-heading">
        <h2 className="text-heading-sm font-heading-semibold">
          {capitalizeEachWord(heading)}
        </h2>
        <div className="bg-task-count w-4 h-4 flex justify-center items-center rounded-full bg-blue-extra-light">
          <p className="text-body-sm font-body-regular text-primary">
            {itemCount}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
}
