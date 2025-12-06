import RegularSection from './section-regular';
import TaskGroupCard from './task-group-card';
import briefcaseIcon from '@/public/icons/briefcase.svg';

export default function TaskGroupsSection() {
  return (
    <RegularSection heading="task groups" itemCount={3}>
      <ul className="flex flex-col gap-gap-md">
        <TaskGroupCard
          colorName="pink"
          icon={briefcaseIcon}
          progress={75}
          taskCount={1}
        />
        <TaskGroupCard
          colorName="orange"
          icon={briefcaseIcon}
          progress={100}
          taskCount={0}
        />
        <TaskGroupCard
          colorName="purple"
          icon={briefcaseIcon}
          progress={25}
          taskCount={24}
        />
      </ul>
    </RegularSection>
  );
}
