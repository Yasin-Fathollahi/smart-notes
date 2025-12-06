type IconWithBGProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hasBg: boolean;
  size: 'sm' | 'md';
  colorName: 'yellow' | 'purple' | 'orange' | 'pink';
};

export default function CardIcon({
  icon,
  hasBg,
  size,
  colorName,
}: IconWithBGProps) {
  const sizes =
    size === 'sm'
      ? {
          bg: 'w-6 h-6',
          icon: 18,
        }
      : {
          bg: 'w-8.5 h-8.5',
          icon: 24,
        };
  const Icon = icon;
  if (hasBg) {
    return (
      <div
        style={{ backgroundColor: `var(--color-${colorName}-1)` }}
        className={`${sizes.bg} rounded-icon-bg flex items-center justify-center`}
      >
        <Icon
          height={sizes.icon}
          width={sizes.icon}
          fill={`var(--color-${colorName}-6)`}
        />
      </div>
    );
  }
  return (
    <Icon
      height={sizes.icon}
      width={sizes.icon}
      fill={`var(--color-${colorName}-6)`}
    />
  );
}
