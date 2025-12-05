'use client';
import { Activity, useState } from 'react';
import Image from 'next/image';
import arrowDown from '../../../public/icons/Iconly/Bold/Arrow - Down 2.svg';

type DropDownProps = {
  id: string;
  label: string;
  options: string[];
};

export default function Select({ id, label, options }: DropDownProps) {
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
    <div className="input bg-gray-300/30 relative min-h-16">
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
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Image src={arrowDown} alt="task-icon" width={24} height={24} />
          <div className="flex flex-col items-start gap-0.5">
            <label htmlFor={id} className="input-label text-[#b7b5be]">
              {label}
            </label>
            <p>{selected}</p>
          </div>
        </div>
        <Image src={arrowDown} alt="arrow down" width={24} height={24} />
      </div>
      <Activity mode={isOpen ? 'visible' : 'hidden'}>
        <ul id="listbox" role="listbox" className={`options-list mt-2`}>
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={selected === opt}
              className={`select-option ${selected === opt && 'bg-blue-300'}`}
              onClick={handleSelect.bind(null, opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      </Activity>
    </div>
  );
}

/*
<div className="input flex justify-between items-center border-2 border-solid border-white relative">
      <div className="flex">
        <div className="flex items-center">
          <Image src={arrowDown} alt="arrow down" width={24} height={24} />
        </div>
        <div className="flex flex-col">
          <label htmlFor={id} className="input-label">
            {label}
          </label>
          <p>title</p>
        </div>
      </div>
      <div className="w-6 h-6 flex justify-center items-center">
        <Image src={arrowDown} alt="arrow down" width={24} height={24} />
      </div>
      <select
        id={id}
        className="opacity-0 w-full h-full absolute bottom-0 left-0 cursor-pointer"
      >
        {children}
        <option value="" className="">
          opt1
        </option>
        <option value="">opt2</option>
        <option value="">opt3</option>
      </select>
    </div>
*/
