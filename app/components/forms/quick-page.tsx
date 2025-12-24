'use client';
import { createPortal } from 'react-dom';
import { type ReactNode } from 'react';
import ArrowIcon from '@/public/icons/Arrow - Left.svg';

type QuickPageProps = {
  isOpen: boolean;
  onReset: () => void;
  children: ReactNode;
};

export default function QuickPage({
  isOpen,
  onReset,
  children,
}: QuickPageProps) {
  const classes = `px-mx-page pt-mt-page m-0 fixed inset-0 transition-all duration-200 ${isOpen ? 'opacity-100 delay-300 z-40' : 'opacity-0 delay-100 -z-50'}`;

  if (!typeof window) return null;

  return createPortal(
    <div className={classes}>
      <header className="flex justify-between mb-mb-section-heading">
        <button type="button" onClick={onReset} className="cursor-pointer">
          <ArrowIcon className="fill-text-default w-6 h-6" />
        </button>
      </header>
      <main>{children}</main>
    </div>,
    document.body
  );
}
