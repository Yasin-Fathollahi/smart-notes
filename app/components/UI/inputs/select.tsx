'use client';
import { Activity, useState } from 'react';
import ChevronDown from '@/public/icons/Arrow - Down 2.svg';
import CardIcon from '@/app/components/UI/icon-card';
import BrifcaseIcon from '@/public/icons/briefcase.svg';

type DropDownProps = {
  id: string;
  label: string;
  colorName: 'yellow' | 'purple' | 'orange' | 'pink';
  options: string[];
};

export default function Select({
  id,
  label,
  options,
  colorName,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('Pick an option');

  function handleToggle() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSelect(selected: string) {
    setSelected(selected);

    handleToggle();
  }

  return (
    <>
      <div className="min-h-16"></div>
      <div className="input absolute left-0 w-full min-h-16 bg-white">
        <button
          type="button"
          id={id}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="listbox"
          aria-haspopup="listbox"
          tabIndex={0}
          onClick={handleToggle}
          className="absolute top-0 left-0 w-full select-option h-16 cursor-pointer"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <CardIcon
              colorName={colorName}
              size="sm"
              hasBg
              icon={BrifcaseIcon}
            />
            <div className="flex flex-col items-start gap-0.5">
              <label htmlFor={id} className="input-label ">
                {label}
              </label>
              <p className="text-body-base font-body-semibold">{selected}</p>
            </div>
          </div>
          <ChevronDown width={24} height={24} />
        </div>
        <Activity mode={isOpen ? 'visible' : 'hidden'}>
          <ul id="listbox" role="listbox" className={`options-list mt-2`}>
            {options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={selected === opt}
                className={`select-option ${selected === opt && 'bg-primary-light rounded-input'}`}
                onClick={handleSelect.bind(null, opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </Activity>
      </div>
    </>
  );
}
