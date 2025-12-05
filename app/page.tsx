import Image from 'next/image';
import Button from './components/UI/button';
import Select from './components/inputs/select';
import TextInput from './components/inputs/text';
import HomeHeader from './components/headers/home';
import ProgressCircle from './components/UI/progress-circular';
import moreIcon from '../public/icons/more.svg';
import TodaysProgressSection from './components/todays-progress';

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <main>
        <TodaysProgressSection />
      </main>
      <nav className="w-screen"></nav>
    </div>
  );
}
