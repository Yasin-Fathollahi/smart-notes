import type { ActiveIcon, OptionMode } from '@/app/lib/types/types';

type ModalActionsProps = {
  mode: OptionMode;
  handleCloseModal: () => void;
  setActiveIcon: (icon: ActiveIcon) => void;
};

export default function ModalActions({
  mode,
  handleCloseModal,
  setActiveIcon,
}: ModalActionsProps) {
  return (
    <div className="relative h-5.5">
      <div
        className={`absolute right-0 flex gap-4 w-fit ${mode !== 'icons' ? 'translate-y-0' : 'translate-y-10 pointer-events-none'} transition-all duration-150`}
      >
        <button
          type="button"
          className="uppercase cursor-pointer text-body-sm font-body-semibold"
          onClick={handleCloseModal}
        >
          cancel
        </button>
        <button
          type="button"
          className="uppercase cursor-pointer text-body-sm font-body-semibold text-blue"
        >
          save
        </button>
      </div>

      <button
        type="button"
        className={`uppercase cursor-pointer text-body-sm font-body-semibold text-blue absolute right-0 transition-all duration-150 ${mode === 'icons' ? 'translate-y-0' : 'translate-y-10 pointer-events-none'}`}
        onClick={() => setActiveIcon(null)}
      >
        remove icon
      </button>
    </div>
  );
}
