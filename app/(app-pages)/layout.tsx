import { type ReactNode } from 'react';
import { type Svgr } from '@/src/types/types';
import BgBlurryCircles from '@/public/icons/background-blurry-circles.svg';
import Nav from '../components/navigation';
const BlurryBg: Svgr = BgBlurryCircles;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlurryBg className="h-screen fixed left-0 top-0 -z-10" />
      {children}
      <div className="h-h-nav" aria-hidden></div>
      <Nav />
    </>
  );
}
