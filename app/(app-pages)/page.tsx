import HomeHeader from '@/app/components/headers/home-header';
import TodaysProgressSection from './components/todays-progress';
import InProgressSection from './components/in-progress';
import TaskGroupsSection from './components/section-task-groups';

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <main>
        <TodaysProgressSection />
        <InProgressSection />
        <TaskGroupsSection />
      </main>
      <nav className="w-screen"></nav>
    </div>
  );
}
