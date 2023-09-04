import Link from 'next/link';
import React from 'react';
import { NEXT_PUBLIC_DOMAIN } from '../../../config';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  url?: string;
}

const Button = ({ children, variant = 'primary', url }: Props) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };
  const absoluteUrlPattern = /^(?:https?:\/\/|\/\/)/i;

  if (url) {
    const isAbsolute = absoluteUrlPattern.test(url);

    return isAbsolute ? (
      <a
        className={`${variants[variant]} text-center px-8 border py-4 rounded text-card-background font-bold`}
        href={url}
      >
        {NEXT_PUBLIC_DOMAIN}
        {children}
      </a>
    ) : (
      <Link
        className={`${variants[variant]} text-center px-8 border py-4 rounded text-card-background font-bold`}
        href={url}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`${variants[variant]} px-8 border py-4 rounded text-card-background font-bold`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
