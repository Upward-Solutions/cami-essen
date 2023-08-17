import React from 'react';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, variant = 'primary' }: Props) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };

  return (
    <button
      className={`${variants[variant]} px-8 border py-4 rounded text-headlines font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
