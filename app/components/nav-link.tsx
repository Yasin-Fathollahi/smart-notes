import { type Svgr } from '@/src/types/types';
import Link from 'next/link';

type NavLinkProps = {
  icon: Svgr;
  href: string;
  isActive: boolean;
};

export default function NavLink({ icon, href, isActive }: NavLinkProps) {
  const label = href === '/' ? 'home' : href.slice(1);
  const Icon = icon;
  return (
    <Link href={href} aria-label={label} className="nav-link">
      <Icon
        width={28}
        height={28}
        className={isActive ? 'fill-primary' : 'fill-primary-semi-light/80'}
      />
    </Link>
  );
}
