'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '@/public/icons/home.svg';
import CalendarIcon from '@/public/icons/calendar.svg';
import DocumentIcon from '@/public/icons/document-text.svg';
import TwoUsersIcon from '@/public/icons/profile-2user.svg';
import AddIcon from '@/public/icons/add.svg';

export default function Nav() {
  const path = usePathname();
  console.log(path);

  return (
    <nav className="fixed bottom-0 left-0 h-h-nav w-full rounded-t-nav ">
      <ul className="flex items-center h-full">
        <li className="tab-left w-full">
          <div className="py-py-nav px-px-nav flex justify-center gap-10.5">
            <Link href="/" aria-label="Home">
              <HomeIcon
                width={28}
                height={28}
                className={
                  path === '/' ? 'fill-primary' : 'fill-primary-semi-light/80'
                }
              />
            </Link>
            <Link href="/today" aria-label="Today's Tasks">
              <CalendarIcon
                width={28}
                height={28}
                className={
                  path === '/today'
                    ? 'fill-primary'
                    : 'fill-primary-semi-light/80'
                }
              />
            </Link>
          </div>
        </li>
        <li className="tab-fab flex items-center">
          <div className="top">
            <Link href="#" className="add-button" aria-label="Add Task">
              <AddIcon width={28} height={28} />
            </Link>
          </div>
        </li>
        <li className="tab-right w-full">
          <div className="py-py-nav px-px-nav flex justify-center gap-10.5">
            <Link href="#" aria-label="Statistics">
              <DocumentIcon
                width={28}
                height={28}
                className={
                  path === '/stats'
                    ? 'fill-primary'
                    : 'fill-primary-semi-light/80'
                }
              />
            </Link>
            <Link href="#" aria-label="Account">
              <TwoUsersIcon
                width={28}
                height={28}
                className={
                  path === '/account'
                    ? 'fill-primary'
                    : 'fill-primary-semi-light/80'
                }
              />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
