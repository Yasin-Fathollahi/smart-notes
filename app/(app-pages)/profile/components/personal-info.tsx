import Button from '@/app/components/UI/button';
import { FaCamera } from 'react-icons/fa';

export default function PersonalInfo() {
  return (
    <section>
      <div className="inline-grid grid-cols-[max-content_max-content_max-content] gap-x-3 gap-y-1">
        <div className="relative w-fit">
          <div className="w-20 h-20 rounded-circle bg-primary" />
          <div className="absolute right-0 bottom-0 w-6 h-6 rounded-circle bg-white flex items-center justify-center">
            <FaCamera className="h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-col self-center">
          <p className="text-heading-md whitespace-nowrap">Yasin Fathollahi</p>
          <p className="text-body-base">yasin.fathollahi82@gmail.com</p>
        </div>
        <div></div>
        <div className="col-start-2">
          <Button type="button" size="sm" variant="primary">
            Edit Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
