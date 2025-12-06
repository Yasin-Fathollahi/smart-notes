import RegularSection from './section-regular';
import TaskGroupCard from './task-group-card';
import suitcaseIcon from '@/public/icons/suitcase.svg';

export default function TaskGroupsSection() {
  return (
    <RegularSection heading="task groups" itemCount={3}>
      <ul className="flex flex-col gap-gap-md">
        <TaskGroupCard
          colorName="pink"
          icon={suitcaseIcon}
          progress={75}
          taskCount={1}
        />
        <TaskGroupCard
          colorName="orange"
          icon={suitcaseIcon}
          progress={100}
          taskCount={0}
        />
        <TaskGroupCard
          colorName="purple"
          icon={suitcaseIcon}
          progress={25}
          taskCount={24}
        />
      </ul>
    </RegularSection>
  );
}
