'use client';
import { useEffect, useRef, useState } from 'react';
import DateInput from '@/app/components/date-input';
import Select from '@/app/components/UI/inputs/select';
import TextInput from '@/app/components/UI/inputs/text';
import { LuSmilePlus } from 'react-icons/lu';

type NewListProps = {
  title: string;
  isOpen: boolean;
};

function ColorOption({
  color,
  setActive,
}: {
  color: string;
  setActive: (color: string) => void;
}) {
  return (
    <button
      onClick={() => {
        setActive(color);
      }}
      type="button"
      className={`w-7 h-7 cursor-pointer rounded-circle`}
      style={{ backgroundColor: `var(--color-${color}-6)` }}
    />
  );
}

export default function NewList({ title, isOpen }: NewListProps) {
  const [ActiveColor, setActiveColor] = useState<string>('purple');
  const modal = useRef<HTMLDialogElement | null>(null);

  function handleCloseModal() {
    modal!.current!.close();
  }

  useEffect(() => {
    if (isOpen) {
      modal!.current!.showModal();
    }
  }, [isOpen]);

  return (
    <main>
      <h2 style={{ color: `var(--color-${ActiveColor}-6)` }}>{title}</h2>
      <ul className="hidden"></ul>

      <dialog
        ref={modal}
        onClose={handleCloseModal}
        className="p-p-task-card rounded-card mx-auto my-auto"
      >
        <h3
          className="font-heading-semibold text-heading-sm mb-mb-section-heading"
          style={{ color: `var(--color-${ActiveColor}-6)` }}
        >
          New list
        </h3>
        <div className="flex gap-4 mb-4">
          <button type="button">
            <LuSmilePlus
              className={`w-6 h-6`}
              stroke={`var(--color-${ActiveColor}-6)`}
            />
          </button>
          <input
            type="text"
            className={`focus:outline-none border-b-2 text-text-default`}
            style={{ borderColor: `var(--color-${ActiveColor}-6)` }}
          />
        </div>
        <div className="flex gap-2 mb-4">
          <ColorOption color="purple" setActive={setActiveColor} />
          <ColorOption color="pink" setActive={setActiveColor} />
          <ColorOption color="orange" setActive={setActiveColor} />
          <ColorOption color="blue" setActive={setActiveColor} />
        </div>
        <div className="w-fit flex gap-2 ml-auto ">
          <button
            type="button"
            className="uppercase cursor-pointer text-body-base font-body-regular"
          >
            cancel
          </button>
          <button
            type="button"
            className="uppercase cursor-pointer text-body-base font-body-regular"
          >
            save
          </button>
        </div>
      </dialog>
      {/* <form action="" className="flex flex-col gap-6 relative">
        <Select
          id="add-list-select"
          label="Task Group"
          options={['Work', 'Personal', 'School']}
          colorName="pink"
        />
        <TextInput id="project-name" label="Project Name" length="short" />
        <TextInput id="project-description" label="Description" length="long" />
        <DateInput label="Start Date" />
        <DateInput label="End Date" />
      </form> */}
    </main>
  );
}
