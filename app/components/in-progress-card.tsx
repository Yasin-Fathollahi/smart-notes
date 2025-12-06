import Image from 'next/image';
import suitcaseIcon from '../../public/icons/suitcase.svg';
export default function ProgressCard() {
  return (
    <div className="w-50.5 h-29 rounded-card p-p-task-card bg-blue-light drop-shadow-card">
      <div className="flex justify-between mb-2">
        <p className="text-text-muted text-body-sm font-body-regular">
          Office Project
        </p>
        <div className="w-6 h-6 rounded-icon-bg bg-pink-light flex items-center justify-center">
          <Image
            src={suitcaseIcon}
            alt="suitcase icon"
            height={18}
            width={18}
          />
        </div>
      </div>
      <p className="text-body-base text-black leading-body-lg font-body-semibold mb-4 h-9">
        Grocery shopping app design
      </p>
      <progress value={75} max={100} className="progress" />
    </div>
  );
}
