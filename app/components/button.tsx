import Link from 'next/link';
import { type ReactNode } from 'react';

type CommonProps = {
  variant: 'primary' | 'outline';
  size: 'sm' | 'lg';
  children: ReactNode;
};

type ButtonProps = {
  type: 'button';
} & CommonProps;

type LinkProps = {
  type: 'link';
  href: string;
} & CommonProps;

export default function Button(props: ButtonProps | LinkProps) {
  const { type, variant, size, children } = props;
  const classes = `btn btn-${variant} btn-${size} inline-block`;
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
