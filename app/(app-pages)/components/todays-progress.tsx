import ProgressCircle from '@/app/components/UI/progress-circular';
import Button from '@/app/components/UI/button';
import MoreIcon from '@/public/icons/more.svg';

export default function TodaysProgressSection() {
  return (
    <section className="todays-progress-section">
      <div className="flex flex-col gap-8">
        <h2 className="w-40 text-body-base font-body-regular">
          Your today’s tasks almost done!
        </h2>
        <Button
          type="link"
          href="/today"
          size="sm"
          variant="primary"
          className="bg-white text-primary w-fit whitespace-nowrap"
        >
          View Tasks
        </Button>
      </div>
      <div className="col-start-7 w-fit my-auto">
        <ProgressCircle />
      </div>
      <div className="col-start-12">
        <MoreIcon width={24} height={24} />
      </div>
    </section>
  );
}
