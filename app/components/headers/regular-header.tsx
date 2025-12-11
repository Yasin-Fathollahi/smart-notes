import NotificationIcon from '@/public/icons/notification/notification-active.svg';
import ArrowIcon from '@/public/icons/Arrow - Left.svg';
import Link from 'next/link';

export default function Header({ heading }: { heading: string }) {
  return (
    <header className="flex justify-between items-center mb-mb-section-lg">
      <Link href="#" aria-label="Go back">
        <ArrowIcon width={28} height={28} fill={'var(--color-icon-arrow)'} />
      </Link>
      <h1 className="text-heading-sm font-heading-semibold">{heading}</h1>
      <button aria-label="Notifications">
        <NotificationIcon
          width={24}
          height={24}
          fill={'var(--color-icon-arrow)'}
        />
      </button>
    </header>
  );
}
