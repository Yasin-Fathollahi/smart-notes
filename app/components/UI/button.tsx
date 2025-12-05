import Link from 'next/link';
import { type ReactNode } from 'react';

type CommonProps = {
  variant: 'primary' | 'outline';
  size: 'sm' | 'lg';
  children: ReactNode;
  className?: string;
};

type ButtonProps = {
  type: 'button';
} & CommonProps;

type LinkProps = {
  type: 'link';
  href: string;
} & CommonProps;

export default function Button(props: ButtonProps | LinkProps) {
  const { type, variant, size, children, className = '' } = props;
  const classes = `btn btn-${variant} btn-${size} inline-block ${className} font-body-semibold ${size === 'lg' ? 'text-body-lg' : 'text-body-base'}`;
  if (type === 'button') {
    return (
      <button type="button" className={classes}>
        {children}
      </button>
    );
  }

  const { href } = props;
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
