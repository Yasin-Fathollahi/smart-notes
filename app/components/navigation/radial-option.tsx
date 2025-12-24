import { type ReactNode } from 'react';
export default function RadialOption({
  angle,
  active,
  children,
  optionVisible,
}: {
  angle: number;
  active: boolean;
  children: ReactNode;
  optionVisible: boolean;
}) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 h-12 w-12 rounded-full transition-all ${active ? 'bg-primary scale-110 shadow-active-nav-button' : 'bg-muted'} ${optionVisible ? 'blur-none opacity-100' : 'blur-xs opacity-0'}`}
      style={{
        transform: `
          rotate(${angle}deg)
          translateY(-90px)
          rotate(${-angle}deg)
          translate(-50%, -50%)
        `,
      }}
    >
      {children}
    </div>
  );
}
