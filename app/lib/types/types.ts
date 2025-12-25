export type Svgr = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type TaskStatusOption = 'done' | 'in progress' | 'to do';
export type IconName = 'briefcase' | 'book' | 'user';
export type ActiveIcon = { name: IconName; Icon: Svgr } | null;
export type OptionMode = 'colors' | 'icons';
export type Color = 'purple' | 'pink' | 'orange' | 'blue';
