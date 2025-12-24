import Project from './project-card';
import RegularSection from '../../components/section-regular';
import BriefcaseIcon from '@/public/icons/briefcase.svg';
export default function ProjectsSection() {
  return (
    <RegularSection heading="ongoing projects" itemCount={2}>
      <ul className=" flex gap-gap-md overflow-x-auto overflow-y-hidden pb-2 scrollbar-x">
        <Project
          colorName="orange"
          icon={BriefcaseIcon}
          progress={50}
          title="My week"
          category="personal"
        />
        <Project
          colorName="pink"
          icon={BriefcaseIcon}
          progress={25}
          title="The todo app"
          category="work"
        />
      </ul>
    </RegularSection>
  );
}
