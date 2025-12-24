import RegularSection from '../../components/section-regular';
import TaskListCard from './list-card';
import briefcaseIcon from '@/public/icons/briefcase.svg';
import UserOctagonIcon from '@/public/icons/user-octagon.svg';
import BookIcon from '@/public/icons/book.svg';

export default function TaskListsSection() {
  return (
    <RegularSection heading="task lists" itemCount={4}>
      <ul className="flex flex-col gap-gap-md">
        <TaskListCard
          colorName="pink"
          icon={briefcaseIcon}
          progress={75}
          taskCount={1}
          title="office project"
        />
        <TaskListCard
          colorName="purple"
          icon={UserOctagonIcon}
          progress={25}
          taskCount={24}
          title="personal project"
        />
        <TaskListCard
          colorName="orange"
          icon={BookIcon}
          progress={100}
          taskCount={0}
          title="daily study"
        />
        <TaskListCard
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
