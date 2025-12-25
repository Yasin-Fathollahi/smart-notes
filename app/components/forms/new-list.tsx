'use client';
import { useState } from 'react';
import ArrowIcon from '@/public/icons/Arrow - Left.svg';
import type { Color } from '@/app/lib/types/types';
import FormModal from './modal/form-modal';

type NewListProps = {
  title: string;
  isOpen: boolean;
  onReset: () => void;
  isNewList?: boolean;
};

export default function NewList({
  title,
  isOpen,
  onReset,
  isNewList = false,
}: NewListProps) {
  const [activeColor, setActiveColor] = useState<Color>('purple');

  const activeColorVar = `var(--color-${activeColor}-6)`;

  return (
    <>
      <header className="flex justify-between mb-mb-section-heading">
        <button type="button" onClick={onReset} className="cursor-pointer">
          <ArrowIcon width={28} height={28} fill={activeColorVar} />
        </button>
      </header>
      <main>
        <h2
          style={{ color: activeColorVar }}
          className="text-heading-md font-heading-semibold"
        >
          {title}
        </h2>
        <ul className="hidden">
          {/* TODO:
          THIS WILL CONTAIN THE TASKS OF THIS LIST */}
        </ul>

        <FormModal
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          isNewList={isNewList}
          isOpen={isOpen}
          onReset={onReset}
        />
      </main>
    </>
  );
}
