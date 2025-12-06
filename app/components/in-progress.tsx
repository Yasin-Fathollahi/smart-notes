import ProgressCard from './in-progress-card';
import RegularSection from './section-regular';
export default function InProgressSection() {
  return (
    <RegularSection heading="in progress" itemCount={2}>
      <div className=" flex gap-gap-x-projects overflow-x-scroll overflow-y-hidden">
        <ProgressCard />
        <ProgressCard />
      </div>
    </RegularSection>
  );
}
