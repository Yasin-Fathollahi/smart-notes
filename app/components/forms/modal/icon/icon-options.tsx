import IconOption from './icon-option';
import BriefcaseIcon from '@/public/icons/briefcase.svg';
import UserOctagonIcon from '@/public/icons/user-octagon.svg';
import BookIcon from '@/public/icons/book.svg';
import type { ActiveIcon, OptionMode, Color } from '@/app/lib/types/types';

type IconOptionsProps = {
  activeColor: Color;
  setActiveIcon: (newState: ActiveIcon) => void;
  mode: OptionMode;
};

export default function IconOptions({
  activeColor,
  setActiveIcon,
  mode,
}: IconOptionsProps) {
  return (
    <ul
      className={`absolute flex gap-4 transition-all duration-150 ${mode === 'icons' ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}`}
    >
      <IconOption
        color={activeColor}
        icon={{ Icon: BriefcaseIcon, name: 'briefcase' }}
        setActive={setActiveIcon}
      />
      <IconOption
        color={activeColor}
        icon={{ Icon: BookIcon, name: 'book' }}
        setActive={setActiveIcon}
      />
      <IconOption
        color={activeColor}
        icon={{ Icon: UserOctagonIcon, name: 'user' }}
        setActive={setActiveIcon}
      />
    </ul>
  );
}
