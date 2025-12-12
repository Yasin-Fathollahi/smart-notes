import Link from 'next/link';
import HomeIcon from '@/public/icons/home.svg';
import CalendarIcon from '@/public/icons/calendar.svg';
import DocumentIcon from '@/public/icons/document-text.svg';
import TwoUsersIcon from '@/public/icons/profile-2user.svg';
import AddIcon from '@/public/icons/add.svg';

export default function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 h-h-nav w-full rounded-t-nav ">
      <ul className="flex items-center h-full">
        <li className="tab-left w-full">
          <div className="py-py-nav px-px-nav flex justify-center gap-10.5">
            <Link href="#">
              <HomeIcon width={28} height={28} className="fill-primary" />
            </Link>
            <Link href="#">
              <CalendarIcon
                width={28}
                height={28}
                className="fill-primary-semi-light/40"
              />
            </Link>
          </div>
        </li>
        <li className="tab-fab flex items-center">
          <div className="top">
            <Link href="#" className="add-button">
              <AddIcon width={28} height={28} />
            </Link>
          </div>
        </li>
        <li className="tab-right w-full">
          <div className="py-py-nav px-px-nav flex justify-center gap-10.5">
            <Link href="#">
              <DocumentIcon
                width={28}
                height={28}
                className="fill-primary-semi-light/40"
              />
            </Link>
            <Link href="#">
              <TwoUsersIcon
                width={28}
                height={28}
                className="fill-primary-semi-light/40"
              />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
