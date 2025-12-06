import Image from 'next/image';
import ProgressCircle from './UI/progress-circular';
import Button from './UI/button';
import moreIcon from '../../public/icons/more.svg';

export default function TodaysProgressSection() {
  return (
    <section
      className="mb-mb-section bg-primary rounded-task-card-status drop-shadow-card p-p-task-card
        grid grid-cols-12 "
    >
      <div className="flex flex-col gap-8">
        <h2 className="w-40 text-body-base font-body-regular">
          Your today’s tasks almost done!
        </h2>
        <Button
          type="link"
          href="#"
          size="sm"
          variant="primary"
          className="bg-white text-primary w-fit whitespace-nowrap"
        >
          View Tasks
        </Button>
      </div>
      <div className="col-start-7 w-fit my-auto">
        {/* <label htmlFor="progress-today"></label> */}
        <ProgressCircle />
      </div>
      <div className="col-start-12">
        <Image src={moreIcon} alt="discover more icon" width={32} height={32} />
      </div>
    </section>
  );
}
