import ColorOption from './color-option';
import type { OptionMode, Color } from '@/app/lib/types/types';

type ColorOptionsProps = {
  mode: OptionMode;
  setActiveColor: (color: Color) => void;
};

export default function ColorOptions({
  mode,
  setActiveColor,
}: ColorOptionsProps) {
  return (
    <div
      className={` flex gap-4 transition-all duration-150 ${mode === 'colors' ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}`}
    >
      <ColorOption color="purple" setActive={setActiveColor} />
      <ColorOption color="pink" setActive={setActiveColor} />
      <ColorOption color="orange" setActive={setActiveColor} />
      <ColorOption color="blue" setActive={setActiveColor} />
    </div>
  );
}
