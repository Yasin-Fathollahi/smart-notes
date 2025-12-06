type ProgressCircleProps = {
  progress?: number;
  size?: number;
  strokeWidth?: number;
  colorName?: 'yellow' | 'purple' | 'orange' | 'pink';
};
//  style={{ backgroundColor: `var(--color-${colorName}-1)` }}
export default function ProgressCircle({
  progress = 75,
  size = 100,
  strokeWidth = 12,
  colorName = 'purple',
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const ringStrokeColor =
    colorName === 'purple' && size === 100 ? 'purple-5' : `${colorName}-1`;

  const ProgressStrokeColor =
    colorName === 'purple' && size === 100 ? 'white' : `${colorName}-6`;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Percentage Text */}
      <span
        className="absolute font-semibold"
        style={{ fontSize: size * (size === 100 ? 0.18 : 0.24) }}
      >
        {progress}%
      </span>

      {/* SVG */}
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`var(--color-${ringStrokeColor})`} // background ring
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`var(--color-${ProgressStrokeColor})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.4s ease' }}
        />
        {/* <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs> */}
      </svg>
    </div>
  );
}
