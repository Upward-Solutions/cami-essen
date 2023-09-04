'use client';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div
      className='flex rounded gap-4 p-4 bg-card-background cursor-pointer hover:bg-card-background-hover shadow-lg'
      onClick={() => setIsChecked((prev) => !prev)}
    >
      {children}
      <input type='checkbox' className='ml-auto' checked={isChecked} />
    </div>
  );
};

export default Card;
