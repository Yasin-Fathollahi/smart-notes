import type { Color } from '@/app/lib/types/types';

export default function ColorOption({
  color,
  setActive,
}: {
  color: Color;
  setActive: (color: Color) => void;
}) {
  return (
    <button
      onClick={() => {
        setActive(color);
      }}
      type="button"
      className={`w-7 h-7 cursor-pointer rounded-circle`}
      style={{ backgroundColor: `var(--color-${color}-6)` }}
    />
  );
}
