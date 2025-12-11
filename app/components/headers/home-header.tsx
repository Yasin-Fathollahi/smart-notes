import NotificationIcon from '@/public/icons/notification/notification-active.svg';

export default function HomeHeader() {
  return (
    <header className="mb-mb-section">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-11.5 h-11.5 bg-primary">
            {/* user avatar */}
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <h1>
              <span className="text-body-base">Hello!</span>
              <br />
              <span className="text-body-lg font-body-semibold">
                Yasin Fathollahi
              </span>
            </h1>
          </div>
        </div>
        <button aria-label="Notifications">
          <NotificationIcon
            width={24}
            height={24}
            fill={'var(--color-icon-arrow)'}
          />
        </button>
      </div>
    </header>
  );
}
