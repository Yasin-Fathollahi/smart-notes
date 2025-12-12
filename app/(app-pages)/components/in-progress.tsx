import ProgressCard from './in-progress-card';
import RegularSection from '../../components/section-regular';
import BriefcaseIcon from '@/public/icons/briefcase.svg';
export default function InProgressSection() {
  return (
    <RegularSection heading="in progress" itemCount={2}>
      <ul className=" flex gap-gap-md overflow-x-auto overflow-y-hidden pb-2 scrollbar-x">
        <ProgressCard colorName="orange" icon={BriefcaseIcon} progress={50} />
        <ProgressCard colorName="pink" icon={BriefcaseIcon} progress={25} />
      </ul>
    </RegularSection>
  );
}
