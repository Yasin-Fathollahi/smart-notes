import BgBlurryCircles from '@/public/icons/background-blurry-circles.svg';
import { type Svgr } from '@/src/types/types';

const BlurryBg: Svgr = BgBlurryCircles;

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <BlurryBg className=" h-screen" />
    </div>
  );
}
