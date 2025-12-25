import type { ActiveIcon, Color } from '@/app/lib/types/types';

export default function IconOption({
  color,
  icon,
  setActive,
}: {
  color: Color;
  icon: NonNullable<ActiveIcon>;
  setActive: (icon: ActiveIcon) => void;
}) {
  const Icon = icon.Icon;

  return (
    <li>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setActive(icon)}
      >
        <Icon width={24} height={24} fill={`var(--color-${color}-6)`} />
      </button>
    </li>
  );
}
