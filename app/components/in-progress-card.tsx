import suitcaseIcon from '../../public/icons/suitcase.svg';
import CardIcon from './UI/icon-card';
export default function ProgressCard() {
  return (
    <li className="card w-50.5 h-29 bg-blue-light">
      <div className="flex justify-between mb-2">
        <p className="text-text-muted text-body-sm font-body-regular">
          Office Project
        </p>
        <CardIcon colorName="pink" size="sm" hasBg icon={suitcaseIcon} />
      </div>
      <p className="text-body-base text-text-default leading-body-lg font-body-semibold mb-4 h-9">
        Grocery shopping app design
      </p>
      <progress value={75} max={100} className="progress" />
    </li>
  );
}
