import HomeHeader from './components/headers/home-header';
import TodaysProgressSection from './components/todays-progress';
import InProgressSection from './components/in-progress';

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <main>
        <TodaysProgressSection />
        <InProgressSection />
      </main>
      <nav className="w-screen"></nav>
    </div>
  );
}
