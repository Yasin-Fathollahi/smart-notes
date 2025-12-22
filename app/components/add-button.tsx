'use client';
import AddIcon from '@/public/icons/add.svg';
import { useRef, useState } from 'react';
import RadialOption from './radial-option';

type ActiveOption = 'list' | 'group' | null;

function getAngle(cx: number, cy: number, x: number, y: number) {
  const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI); // Getting the angle and converting Radian to degrees
  return angle;
}

function resolveOption(angle: number): ActiveOption {
  const positiveAngle = Math.abs(angle);

  if (positiveAngle < 90) return 'group';
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
  const [activeOption, setActiveOption] = useState<ActiveOption>(null);
  const holdTimeout = useRef<number | null>(null);

  // The Holding Logic
  function handlePointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);

    holdTimeout.current = window.setTimeout(() => {
      setIsHolding(true);
    }, 150);
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
    }

    if (isHolding && activeOption) {
      // runAction(activeOption);
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
    <div className="">
      {isHolding && (
        <div className="absolute inset-0 pointer-events-none">
          <RadialOption angle={-40} active={activeOption === 'list'} />
          <RadialOption angle={40} active={activeOption === 'group'} />
        </div>
      )}
      <button
        className="add-button cursor-pointer touch-none"
        aria-label="Add"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={reset}
      >
        <AddIcon width={36} height={36} />
      </button>
    </div>
  );
}
