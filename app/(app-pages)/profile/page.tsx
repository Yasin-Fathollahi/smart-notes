import Header from '@/app/components/headers/regular-header';
import PersonalInfo from './components/personal-info';
import { CgRowFirst } from 'react-icons/cg';
import { FaChevronLeft } from 'react-icons/fa';

export default function Profile() {
  return (
    <div className="h-full flex flex-col">
      <Header heading="my profile" />
      <main className="flex flex-col flex-1 min-h-0">
        <PersonalInfo />
        <section className="flex flex-col">
          <div>
            <div className="w-18">
              <CgRowFirst className="w-7.5 h-7.5" />
            </div>
            <p>Favorites</p>
            <div>
              <FaChevronLeft />
            </div>
          </div>
        </section>
      </main>
      <div className="h-h-nav" aria-hidden />
    </div>
  );
}
