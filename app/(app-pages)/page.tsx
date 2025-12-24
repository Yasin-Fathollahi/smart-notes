import HomeHeader from '@/app/components/headers/home-header';
import TodaysProgressSection from './components/todays-progress';
import ProjectsSection from './components/projects-section';
import TaskListsSection from './components/lists-section';

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <main>
        <TodaysProgressSection />
        <ProjectsSection />
        <TaskListsSection />
      </main>
      <nav className="w-screen"></nav>
    </div>
  );
}
