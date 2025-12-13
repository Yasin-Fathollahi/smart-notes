import RegularSection from '../../components/section-regular';
import TaskGroupCard from './task-group-card';
import briefcaseIcon from '@/public/icons/briefcase.svg';
import UserOctagonIcon from '@/public/icons/user-octagon.svg';
import BookIcon from '@/public/icons/book.svg';

export default function TaskGroupsSection() {
  return (
    <RegularSection heading="task groups" itemCount={3}>
      <ul className="flex flex-col gap-gap-md">
        <TaskGroupCard
          colorName="pink"
          icon={briefcaseIcon}
          progress={75}
          taskCount={1}
          title="office project"
        />
        <TaskGroupCard
          colorName="purple"
          icon={UserOctagonIcon}
          progress={25}
          taskCount={24}
          title="personal project"
        />
        <TaskGroupCard
          colorName="orange"
          icon={BookIcon}
          progress={100}
          taskCount={0}
          title="daily study"
        />
        <TaskGroupCard
          colorName="yellow"
          icon={BookIcon}
          progress={25}
          taskCount={24}
          title="daily study"
        />
      </ul>
    </RegularSection>
  );
}
