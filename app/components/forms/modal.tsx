'use client';
import { createPortal } from 'react-dom';
import { type ReactNode } from 'react';
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
  const classes = `px-mx-page bg-red-500 h-screen pt-mt-page m-0  top-0 left-0 right-0 fixed transition-all duration-200 ${isOpen ? 'opacity-100 delay-300 z-40' : '-z-10 opacity-0'}`;

  if (!typeof window) return null;

  return createPortal(
    <div className={classes}>
      <header className="flex justify-between mb-mb-section-heading">
        <span />
        <h2 className="text-heading-sm font-heading-semibold text-center">
          {heading}
        </h2>
        <button type="button" onClick={onReset} className="cursor-pointer">
          <IoClose className="fill-text-default w-8 h-8" />
        </button>
      </header>
      <main>{children}</main>
    </div>,
    document.body
  );
}
