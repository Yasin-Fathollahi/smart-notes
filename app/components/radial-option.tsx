export default function RadialOption({
  angle,
  active,
}: {
  angle: number;
  active: boolean;
}) {
  return (
    <div
      className={`
        absolute left-1/2 top-1/2
        h-12 w-12 rounded-full
        transition-all
        ${active ? 'bg-primary scale-110' : 'bg-gray-300'}
      `}
      style={{
        transform: `
          rotate(${angle}deg)
          translateY(-90px)
          rotate(${-angle}deg)
          translate(-50%, -50%)
        `,
      }}
    ></div>
  );
}
