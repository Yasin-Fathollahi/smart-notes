import Image, { type StaticImageData } from 'next/image';

type IconWithBGProps = {
  icon: StaticImageData;
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
  if (hasBg) {
    return (
      <div
        style={{ backgroundColor: `var(--color-${colorName}-1)` }}
        className={`${sizes.bg} rounded-icon-bg flex items-center justify-center`}
      >
        <Image
          src={icon}
          alt="suitcase icon"
          height={sizes.icon}
          width={sizes.icon}
        />
      </div>
    );
  }
  return (
    <Image
      src={icon}
      alt="suitcase icon"
      height={sizes.icon}
      width={sizes.icon}
    />
  );
}
