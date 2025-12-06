import ProgressCard from './in-progress-card';
import RegularSection from './section-regular';
import BriefcaseIcon from '@/public/icons/briefcase.svg';
export default function InProgressSection() {
  return (
    <RegularSection heading="in progress" itemCount={2}>
      <ul className=" flex gap-gap-md overflow-x-scroll overflow-y-hidden">
        <ProgressCard colorName="orange" icon={BriefcaseIcon} progress={50} />
        <ProgressCard colorName="pink" icon={BriefcaseIcon} progress={25} />
      </ul>
    </RegularSection>
  );
}
