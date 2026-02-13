import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type CommonProps = {
  variant: 'primary' | 'outline' | 'deactive';
  size: 'sm' | 'lg';
  children: ReactNode;
  className?: string;
};

type ButtonProps = {
  type: 'button';
} & CommonProps &
  ComponentPropsWithoutRef<'button'>;

type LinkProps = {
  type: 'link';
  href: string;
} & CommonProps &
  ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | LinkProps) {
  const { type, variant, size, children, className = '' } = props;
  const classes = `btn btn-${variant} btn-${size} inline-block ${className} font-body-semibold ${size === 'lg' ? 'text-body-lg' : 'text-body-base'} whitespace-nowrap`;
  if (type === 'button') {
    const { ...rest } = props;
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    );
  }

  const { href, ...rest } = props;
  const linkClasses =
    classes + ' bg-white text-primary w-fit whitespace-nowrap';
  return (
    <Link href={href} className={linkClasses} {...rest}>
      {children}
    </Link>
  );
}
