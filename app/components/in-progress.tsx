import ProgressCard from './in-progress-card';
import RegularSection from './section-regular';
export default function InProgressSection() {
  return (
    <RegularSection heading="in progress" itemCount={2}>
      <ul className=" flex gap-gap-md overflow-x-scroll overflow-y-hidden">
        <ProgressCard />
        <ProgressCard />
      </ul>
    </RegularSection>
  );
}
