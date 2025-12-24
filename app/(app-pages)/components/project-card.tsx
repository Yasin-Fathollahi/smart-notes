import CardIcon from '@/app/components/UI/icon-card';

type ProjectProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  progress: number;
  colorName: 'yellow' | 'purple' | 'orange' | 'pink';
  title: string;
  category: 'personal' | 'work' | 'home' | 'school';
};

export default function Project({
  icon,
  progress,
  colorName,
  title,
  category,
}: ProjectProps) {
  return (
    <li className="card w-50.5 h-29 bg-blue-light">
      <div className="flex justify-between mb-2">
        <p className="text-text-muted text-body-sm font-body-regular capitalize">
          {category}
        </p>
        <CardIcon colorName={colorName} size="sm" hasBg icon={icon} />
      </div>
      <p className="text-body-base text-text-default leading-body-lg font-body-semibold mb-2 h-9">
        {title}
      </p>
      <progress value={progress} max={100} className="progress" />
    </li>
  );
}
