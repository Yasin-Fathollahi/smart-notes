'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '@/public/icons/home.svg';
import CalendarIcon from '@/public/icons/calendar.svg';
import DocumentIcon from '@/public/icons/document-text.svg';
import TwoUsersIcon from '@/public/icons/profile-2user.svg';
import AddIcon from '@/public/icons/add.svg';
import NavLink from './nav-link';

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 h-h-nav w-full rounded-t-nav ">
      <ul className="flex items-center h-full">
        <li className="tab-left w-full">
          <div className="flex justify-center h-full">
            <NavLink icon={HomeIcon} href="/" isActive={path === '/'} />
            <NavLink
              icon={CalendarIcon}
              href="/today"
              isActive={path === '/today'}
            />
          </div>
        </li>
        <li className="tab-fab flex items-center">
          <div className="top">
            <Link
              href="/add-project"
              className="add-button"
              aria-label="Add Project"
            >
              <AddIcon width={36} height={36} />
            </Link>
          </div>
        </li>
        <li className="tab-right w-full">
          <div className="flex justify-center h-full">
            <NavLink
              icon={DocumentIcon}
              href="/stats"
              isActive={path === '/stats'}
            />
            <NavLink
              icon={TwoUsersIcon}
              href="/account"
              isActive={path === '/account'}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}
