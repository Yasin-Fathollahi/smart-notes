import type { ActiveIcon, Color, OptionMode } from '@/app/lib/types/types';
import { useEffect, useRef, useState } from 'react';
import { LuSmilePlus } from 'react-icons/lu';
import IconOptions from './icon/icon-options';
import ModalActions from './modal-actions';
import ColorOptions from './color/color-options';

type formModalProps = {
  activeColor: Color;
  setActiveColor: (color: Color) => void;
  isOpen: boolean;
  onReset: () => void;
  isNewList?: boolean;
};

export default function FormModal({
  activeColor,
  setActiveColor,
  onReset,
  isNewList,
  isOpen,
}: formModalProps) {
  const [mode, setMode] = useState<OptionMode>('colors');
  const [activeIcon, setActiveIcon] = useState<ActiveIcon>(null);
  const modal = useRef<HTMLDialogElement | null>(null);
  const activeColorVar = `var(--color-${activeColor}-6)`;

  function handleCloseModal() {
    if (!modal.current) return;
    modal.current.close();

    if (isNewList) {
      onReset();
    }
  }

  function toggleMode() {
    setMode((prevState) => (prevState === 'colors' ? 'icons' : 'colors'));
  }

  useEffect(() => {
    if (!modal.current) return;
    if (isOpen) {
      modal.current.showModal();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modal}
      onClose={handleCloseModal}
      className="p-p-task-card rounded-card mx-auto my-auto backdrop:bg-black/25 overflow-y-hidden"
    >
      <h3
        className="font-heading-semibold text-heading-sm mb-mb-section-heading"
        style={{ color: activeColorVar }}
      >
        New list
      </h3>
      <div className="flex gap-4 mb-4">
        <button type="button" className="cursor-pointer" onClick={toggleMode}>
          {activeIcon?.Icon ? (
            <activeIcon.Icon className={`w-6 h-6`} fill={activeColorVar} />
          ) : (
            <LuSmilePlus className={`w-6 h-6`} stroke={activeColorVar} />
          )}
        </button>
        <input
          type="text"
          className={`focus:outline-none border-b-2 text-text-default`}
          placeholder="Groceries"
          style={{ borderColor: activeColorVar }}
        />
      </div>
      <div className="relative mb-4">
        <IconOptions
          activeColor={activeColor}
          mode={mode}
          setActiveIcon={setActiveIcon}
        />
        <ColorOptions mode={mode} setActiveColor={setActiveColor} />
      </div>

      <ModalActions
        handleCloseModal={handleCloseModal}
        mode={mode}
        setActiveIcon={setActiveIcon}
      />
    </dialog>
  );
}
