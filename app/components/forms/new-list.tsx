'use client';
import { useEffect, useRef, useState } from 'react';
import { type Svgr } from '@/app/lib/types/types';
import DateInput from '@/app/components/date-input';
import Select from '@/app/components/UI/inputs/select';
import TextInput from '@/app/components/UI/inputs/text';
import { LuSmilePlus } from 'react-icons/lu';
import ArrowIcon from '@/public/icons/Arrow - Left.svg';
import BriefcaseIcon from '@/public/icons/briefcase.svg';
import UserOctagonIcon from '@/public/icons/user-octagon.svg';
import BookIcon from '@/public/icons/book.svg';

type NewListProps = {
  title: string;
  isOpen: boolean;
  onReset: () => void;
  isNewList?: boolean;
};

type ActiveIcon =
  | { iconName: 'briefcase'; Icon: Svgr }
  | { iconName: 'book'; Icon: Svgr }
  | { iconName: 'user'; Icon: Svgr }
  | null;

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

function IconOption({
  color,
  icon,
  setActive,
}: {
  color: string;
  icon: ActiveIcon;
  setActive: (icon: ActiveIcon) => void;
}) {
  const Icon = icon!.Icon;

  return (
    <li>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setActive(icon)}
      >
        <Icon width={24} height={24} fill={`var(--color-${color}-6)`} />
      </button>
    </li>
  );
}

export default function NewList({
  title,
  isOpen,
  onReset,
  isNewList = false,
}: NewListProps) {
  const [activeColor, setActiveColor] = useState<string>('purple');
  const [activeOptions, setActiveOptions] = useState<'colors' | 'icons'>(
    'colors'
  );
  const [activeIcon, setActiveIcon] = useState<ActiveIcon>(null);
  const modal = useRef<HTMLDialogElement | null>(null);

  function handleCloseModal() {
    modal!.current!.close();
    if (isNewList) {
      onReset();
    }
  }

  function switchOptionsSet() {
    setActiveOptions((prevState) =>
      prevState === 'colors' ? 'icons' : 'colors'
    );
  }

  useEffect(() => {
    if (isOpen) {
      modal!.current!.showModal();
    }
  }, [isOpen]);

  return (
    <>
      <header className="flex justify-between mb-mb-section-heading">
        <button type="button" onClick={onReset} className="cursor-pointer">
          <ArrowIcon
            width={28}
            height={28}
            fill={`var(--color-${activeColor}-6)`}
          />
        </button>
      </header>
      <main>
        <h2
          style={{ color: `var(--color-${activeColor}-6)` }}
          className="text-heading-md font-heading-semibold"
        >
          {title}
        </h2>
        <ul className="hidden"></ul>

        <dialog
          ref={modal}
          onClose={handleCloseModal}
          className="p-p-task-card rounded-card mx-auto my-auto backdrop:bg-black/25"
        >
          <h3
            className="font-heading-semibold text-heading-sm mb-mb-section-heading"
            style={{ color: `var(--color-${activeColor}-6)` }}
          >
            New list
          </h3>
          <div className="flex gap-4 mb-4">
            <button
              type="button"
              className="cursor-pointer"
              onClick={switchOptionsSet}
            >
              {activeIcon?.Icon ? (
                <activeIcon.Icon
                  className={`w-6 h-6`}
                  fill={`var(--color-${activeColor}-6)`}
                />
              ) : (
                <LuSmilePlus
                  className={`w-6 h-6`}
                  stroke={`var(--color-${activeColor}-6)`}
                />
              )}
            </button>
            <input
              type="text"
              className={`focus:outline-none border-b-2 text-text-default`}
              placeholder="Groceries"
              style={{ borderColor: `var(--color-${activeColor}-6)` }}
            />
          </div>

          <div className="relative mb-4">
            <ul
              className={`absolute flex gap-4 transition-all duration-500 ${activeOptions === 'icons' ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}
            >
              <IconOption
                color={activeColor}
                icon={{ Icon: BriefcaseIcon, iconName: 'briefcase' }}
                setActive={setActiveIcon}
              />
              <IconOption
                color={activeColor}
                icon={{ Icon: BookIcon, iconName: 'book' }}
                setActive={setActiveIcon}
              />
              <IconOption
                color={activeColor}
                icon={{ Icon: UserOctagonIcon, iconName: 'user' }}
                setActive={setActiveIcon}
              />
              {/* <li>
                <button type="button" className="cursor-pointer">
                  <BriefcaseIcon
                    width={24}
                    height={24}
                    fill={`var(--color-${activeColor}-6)`}
                  />
                </button>
              </li>
              <li>
                <button type="button" className="cursor-pointer">
                  <BookIcon
                    width={24}
                    height={24}
                    fill={`var(--color-${activeColor}-6)`}
                  />
                </button>
              </li>
              <li>
                <button type="button" className="cursor-pointer">
                  <UserOctagonIcon
                    width={24}
                    height={24}
                    fill={`var(--color-${activeColor}-6)`}
                  />
                </button>
              </li> */}
            </ul>

            <div
              className={` flex gap-4 transition-all duration-500 ${activeOptions === 'colors' ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}
            >
              <ColorOption color="purple" setActive={setActiveColor} />
              <ColorOption color="pink" setActive={setActiveColor} />
              <ColorOption color="orange" setActive={setActiveColor} />
              <ColorOption color="blue" setActive={setActiveColor} />
            </div>
          </div>

          <div className="w-fit flex gap-2 ml-auto ">
            <button
              type="button"
              className="uppercase cursor-pointer text-body-base font-body-regular"
              onClick={handleCloseModal}
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
    </>
  );
}
