import CardIcon from './UI/icon-card';
import ProgressCircle from './UI/progress-circular';

type TaskGroupCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  progress: number;
  colorName: 'yellow' | 'purple' | 'orange' | 'pink';
  taskCount: number;
};

export default function TaskGroupCard({
  icon,
  progress,
  colorName,
  taskCount,
}: TaskGroupCardProps) {
  return (
    <li className="card bg-white text-text-default">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <CardIcon colorName={colorName} size="md" hasBg icon={icon} />
          <div className="flex flex-col items-start gap-0.5">
            <h1>
              <span className="text-body-base">Personal Project</span>
              <br />
              <p className="text-text-muted text-body-sm font-body-regular">
                {(taskCount === 0 ? 'All' : taskCount) +
                  (taskCount === 1 ? ' task' : ' tasks') +
                  (taskCount === 0 ? ' done' : '')}
              </p>
            </h1>
          </div>
        </div>
        <ProgressCircle
          colorName={colorName}
          strokeWidth={6}
          size={50}
          progress={progress}
        />
      </div>
    </li>
  );
}
