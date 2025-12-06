import CardIcon from './UI/icon-card';

type ProgressCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  progress: number;
  colorName: 'yellow' | 'purple' | 'orange' | 'pink';
};

export default function ProgressCard({
  icon,
  progress,
  colorName,
}: ProgressCardProps) {
  return (
    <li className="card w-50.5 h-29 bg-blue-light">
      <div className="flex justify-between mb-2">
        <p className="text-text-muted text-body-sm font-body-regular">
          Office Project
        </p>
        <CardIcon colorName={colorName} size="sm" hasBg icon={icon} />
      </div>
      <p className="text-body-base text-text-default leading-body-lg font-body-semibold mb-4 h-9">
        Grocery shopping app design
      </p>
      <progress value={progress} max={100} className="progress" />
    </li>
  );
}
