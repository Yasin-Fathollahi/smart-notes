export default function ProgressCircle({
  progress = 75,
  size = 100,
  strokeWidth = 12,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Percentage Text */}
      <span
        className="absolute font-semibold"
        style={{ fontSize: size * 0.18 }}
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
          stroke="#8764FF" // background ring
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#fff"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.4s ease' }}
        />
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
