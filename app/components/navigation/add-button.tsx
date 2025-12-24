'use client';
import AddIcon from '@/public/icons/add.svg';
import { useRef, useState } from 'react';
import RadialOption from './radial-option';
import { IoDocument, IoDocuments } from 'react-icons/io5';
import NewList from '../forms/new-list';
import QuickPage from '../forms/quick-page';

type Option = 'list' | 'project' | null;

function getAngle(cx: number, cy: number, x: number, y: number) {
  const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI); // Getting the angle and converting Radian to degrees
  return angle;
}

function resolveOption(angle: number): Option {
  const positiveAngle = Math.abs(angle);

  if (positiveAngle < 90) return 'project';
  if (positiveAngle < 180) return 'list';
  return null;
}

function pointerIsInsideElement(e: React.PointerEvent) {
  const rect = e.currentTarget.getBoundingClientRect();
  return (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
  );
}

export default function AddButton() {
  const [isHolding, setIsHolding] = useState(false);
  const [activeOption, setActiveOption] = useState<Option>(null);
  const [createMode, setCreateMode] = useState<Option>(null);

  const holdTimeout = useRef<number | null>(null);

  // The Holding Logic
  function handlePointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);

    holdTimeout.current = window.setTimeout(() => {
      setIsHolding(true);
    }, 75);
  }

  function handlePointerUp() {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
    }

    if (isHolding && activeOption) {
      setCreateMode(activeOption);
    }

    reset();
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isHolding) return;

    const pointerInside = pointerIsInsideElement(e);

    if (pointerInside) {
      return setActiveOption(null);
    }

    const rect = e.currentTarget.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const angle = getAngle(cx, cy, e.clientX, e.clientY);

    // check if pointer has left the add button
    setActiveOption(resolveOption(angle));
  }

  function reset() {
    setIsHolding(false);
    setActiveOption(null);
  }

  return (
    <div>
      <div>
        <div className="absolute inset-0 pointer-events-none">
          <RadialOption
            angle={-40}
            active={activeOption === 'list'}
            optionVisible={isHolding}
          >
            <IoDocument
              className={`absolute left-1/2 top-1/2 -translate-1/2 ${activeOption === 'list' ? 'fill-white' : 'fill-primary'} w-6 h-6`}
            />
          </RadialOption>
          <RadialOption
            angle={40}
            active={activeOption === 'project'}
            optionVisible={isHolding}
          >
            <IoDocuments
              className={`absolute left-1/2 top-1/2 -translate-1/2 ${activeOption === 'project' ? 'fill-white' : 'fill-primary'} w-6 h-6`}
            />
          </RadialOption>
        </div>
        <button
          className={`add-button cursor-pointer touch-none ${isHolding && 'inner-shadow'} z-50`}
          aria-label="Add"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={reset}
        >
          <AddIcon width={36} height={36} />
        </button>
      </div>
      <div>
        <div
          className={`add-button bg-white transition-all ${createMode ? 'scale-5000 z-50 duration-1000' : 'scale-100 duration-600'}`}
        />

        <QuickPage
          isOpen={createMode === 'list'}
          onReset={() => {
            setCreateMode(null);
          }}
        >
          <NewList title={'Untitled List'} isOpen={createMode === 'list'} />
        </QuickPage>
      </div>
    </div>
  );
}
