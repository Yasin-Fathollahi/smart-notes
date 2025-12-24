'use client';
import { createPortal } from 'react-dom';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';

type ModalProps = {
  isOpen: boolean;
  onReset: () => void;
  heading: string;
  children: ReactNode;
};

export default function Modal({
  isOpen,
  onReset,
  heading,
  children,
}: ModalProps) {
  const [isOpenWithDelay, setIsOpenWithDelay] = useState(false);
  const dialog = useRef<HTMLDialogElement | null>(null);

  function handleCloseModal() {
    onReset();
    setIsOpenWithDelay(false);
    setTimeout(() => {
      dialog!.current!.close();
    }, 1000);
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpenWithDelay(true);
      }, 300);
      dialog!.current!.show();
    }
  }, [isOpen]);

  if (!typeof window) return null;

  return createPortal(
    <dialog
      className={`px-mx-page pt-mt-page m-0 z-40 top-0 w-screen h-screen fixed transition-all duration-300 ${isOpenWithDelay ? 'opacity-100' : 'opacity-0'}`}
      ref={dialog}
    >
      <header className="flex justify-between mb-mb-section-heading">
        <span />
        <h2 className="text-heading-sm font-heading-semibold text-center">
          {heading}
        </h2>
        <button
          type="button"
          onClick={handleCloseModal}
          className="cursor-pointer"
        >
          <IoClose className="fill-text-default w-8 h-8" />
        </button>
      </header>
      <main>{children}</main>
    </dialog>,
    document.body
  );
}
